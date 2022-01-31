// Do not edit. Generated by build.js

export const esbuild = {
  version:      "0.14.14",
  BuildOptions: new Set([
    "sourcemap"         , // boolean | 'inline' | 'external' | 'both'
    "legalComments"     , // 'none' | 'inline' | 'eof' | 'linked' | 'external'
    "sourceRoot"        , // string
    "sourcesContent"    , // boolean
    "format"            , // Format
    "globalName"        , // string
    "target"            , // string | string[]
    "drop"              , // Drop[]
    "minify"            , // boolean
    "minifyWhitespace"  , // boolean
    "minifyIdentifiers" , // boolean
    "minifySyntax"      , // boolean
    "charset"           , // Charset
    "treeShaking"       , // boolean
    "ignoreAnnotations" , // boolean
    "jsx"               , // 'transform' | 'preserve'
    "jsxFactory"        , // string
    "jsxFragment"       , // string
    "define"            , // { [key: string]: string; }
    "pure"              , // string[]
    "keepNames"         , // boolean
    "color"             , // boolean
    "logLevel"          , // LogLevel
    "logLimit"          , // number
    "bundle"            , // boolean
    "splitting"         , // boolean
    "preserveSymlinks"  , // boolean
    "outfile"           , // string
    "metafile"          , // boolean
    "outdir"            , // string
    "outbase"           , // string
    "platform"          , // Platform
    "external"          , // string[]
    "loader"            , // { [ext: string]: Loader; }
    "resolveExtensions" , // string[]
    "mainFields"        , // string[]
    "conditions"        , // string[]
    "write"             , // boolean
    "allowOverwrite"    , // boolean
    "tsconfig"          , // string
    "outExtension"      , // { [ext: string]: string; }
    "publicPath"        , // string
    "entryNames"        , // string
    "chunkNames"        , // string
    "assetNames"        , // string
    "inject"            , // string[]
    "banner"            , // { [type: string]: string; }
    "footer"            , // { [type: string]: string; }
    "incremental"       , // boolean
    "entryPoints"       , // string[] | Record<string, string>
    "stdin"             , // StdinOptions
    "plugins"           , // Plugin[]
    "absWorkingDir"     , // string
    "nodePaths"         , // string[]
    "watch"             , // boolean | WatchMode
  ]), // BuildOptions
}

export const estrella = {
  BuildConfig: new Set([
    "entry"       , // string | string[] | Record<string, string>
    "debug"       , // boolean
    "watch"       , // boolean | WatchOptions
    "cwd"         , // string
    "quiet"       , // boolean
    "silent"      , // boolean
    "clear"       , // boolean
    "tslint"      , // boolean | "auto" | "on" | "off" | TSLintBasicOptions
    "onStart"     , // (config: Readonly<BuildConfig>, changedFiles: string[], ctx: BuildContext) => Promise<void> | any
    "onEnd"       , // (config: Readonly<BuildConfig>, buildResult: BuildResult, ctx: BuildContext) => Promise<void> | any
    "outfileMode" , // number | string | string[]
    "run"         , // boolean | string | string[]
    "tsc"         , // boolean | "auto" | "on" | "off"
    "tsrules"     , // TSRules
    "title"       , // string
  ]), // BuildConfig
}