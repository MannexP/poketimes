const ImageminPlugin = require("imagemin-webpack");


module.exports = function override(config, env) {
    //do stuff with the webpack config...
    module: {
        rules: [
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: "file-loader" // Or `url-loader` or your other loader
              }
            ]
          }
        ]
      }
      plugins: [
        // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
        new ImageminPlugin({
          bail: false, // Ignore errors on corrupted images
          cache: true,
          imageminOptions: {
            // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them
     
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      removeViewBox: false
                    }
                  ]
                }
              ]
            ]
          }
        })
      ]
    return config;
  };