const webpack = require("webpack");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "../src/addons/themes-dwyw/preset.js",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, { configType }) => {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
      // Removing Speedy so the static storybook styling doesn't break
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      })
      return config;
  },
  env: (config) => ({
    ...config,
    PACKAGE_NAME: 'dwyw-ui'
  })
};