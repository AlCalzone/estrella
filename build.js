#!/usr/bin/env node
const { build, cliopts, file, ts, log } = require("./dist/estrella")
const Path = require("path")
const fs = require("fs")
const pkg = require("./package.json")

const common = {
  target: "node12",
  platform: "node",
}

build({ ...common,
  entry: "src/estrella.js",
  outfile: cliopts.debug ? "dist/estrella.g.js" : "dist/estrella.js",
  sourcemap: true,
  outfileMode: "+x",
  bundle: true,
  tslint: { format: "short" },
  external: [ "esbuild", "fsevents", "typescript", "source-map-support" ],
  define: {
    VERSION: pkg.version,
  },
  async onStart(config, changedFiles) {
    await generate_typeinfo_srcfile_if_needed()
  }
})

build({ ...common,
  entry: "src/debug/debug.ts",
  outfile: "dist/debug.js",
  bundle: true,
  minify: true,
})

// This function generates src/typeinfo.ts describing available properties of the interfaces
// estrella.BuildConfig and esbuild.BuildOptions, used by estrella to filter and verify options
// passed to build()
async function generate_typeinfo_srcfile_if_needed() {
  const outfile = "src/typeinfo.ts"
  const esbuildPFile = "./node_modules/esbuild/package.json"
  const esbuildPkg = require(esbuildPFile)
  const esbuildDFile = Path.resolve(Path.dirname(esbuildPFile), esbuildPkg.types)
  const estrellaDFile = "./estrella.d.ts"

  // Check the generated file's mtime against other files that influence its contents.
  // If outfile is present and younger than influencing files, skip generation.
  const mtimes = await file.mtime(outfile, esbuildDFile, esbuildPFile, estrellaDFile, __filename)
  const outfileMtime = mtimes.shift()
  if (outfileMtime > Math.max(...mtimes)) {
    // outfile is up-to date
    log.debug(`${outfile} is up-to date; skipping codegen`)
    return
  }

  // Use TypeScript to extract information about interesting interface types
  const BuildOptions = await ts.interfaceInfo(esbuildDFile, "BuildOptions")
  const BuildConfig = await ts.interfaceInfo(estrellaDFile, "BuildConfig")

  // fmtlist formats a list of data as JSON
  const fmtprops = props => {
    let s = "new Set([\n"
    const keys = {}
    const keyMaxlen = Object.keys(props).reduce((a, name) =>
      Math.max(a, JSON.stringify(name).length), 0)
    for (let name of Object.keys(props)) {
      const typeinfo = props[name].typestr.replace(/[\s\n]+/g, " ")
      s += `    ${JSON.stringify(name).padEnd(keyMaxlen, " ")} , // ${typeinfo}\n`
    }
    s += "  ])"
    return s
  }

  // using a template, write outfile
  await file.write(outfile, `
// Do not edit. Generated by build.js

export const esbuild = {
  version:      ${JSON.stringify(esbuildPkg.version)},
  BuildOptions: ${fmtprops(BuildOptions.computedProps())}, // BuildOptions
}

export const estrella = {
  BuildConfig: ${fmtprops(BuildConfig.props)}, // BuildConfig
}
  `.trim())
}
