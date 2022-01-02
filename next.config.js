/** @type {import('next').NextConfig} */

import WindiCSSWebpackPlugin from "windicss-webpack-plugin"

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}
