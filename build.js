#!/usr/bin/env node
const { build, cliopts } = require("./dist/estrella")

build({
  entry: "src/estrella.js",
  outfile: cliopts.debug ? "dist/estrella.g.js" : "dist/estrella.js",
  sourcemap: cliopts.debug ? "inline" : "external",
  outfileMode: "+x",
  platform: "node",
  bundle: true,
  external: [ "esbuild" ],
})