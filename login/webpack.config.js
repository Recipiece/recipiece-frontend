const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "recipiece",
    projectName: "login",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: [
      '@recipiece/module-common',
    ],
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  });
};
