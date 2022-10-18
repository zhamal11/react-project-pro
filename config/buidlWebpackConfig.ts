import path from "path";
import { Configuration } from "webpack";
import { buildDevServer } from "./build/buildDevServer";
import { buildLoaders } from "./build/buildLoaders";
import { buildPlugins } from "./build/buildPlugins";
import { buildResolvers } from "./build/buildResolvers";
import { BuildOptions } from "./build/types/config";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {mode, paths, isDev} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}