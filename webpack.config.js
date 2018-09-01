const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658
// Exporting a object with the Webpack Configuration
module.exports = {
  // tells the webpack where our application starts
  entry: "./src/index.js",
  mode: "development",
  //module object helps define how your exported javascript modules are transformed
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // webpack uses loaders to transform differnt types of files
        loader: "babel-loader",
        options: { presets: ["env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { test: /\.(png|jpg)$/, 
        loader: 'file-loader',
        options: {
            name: "[name].[hash].[ext]",
            outputPath: "images/",
        }
     }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
        // If path is missing, it's default value is root './'
    // path: resolve('./'),
    path: path.resolve(__dirname, "dist/"),
    //https://medium.com/@raviroshan.talk/webpack-understanding-the-publicpath-mystery-aeb96d9effb1
//     we can use webpack’s publicPath to config wepack-dev-server to generate the bundled output files at some virtual location and not on the actual file system. 
// This virtual path can be used to locate and link the generated files from index.html.
/* Imported script:scr in index.html must match the publicPath config. */
/* By default Webpack loader appends the publicPath config with Images URL, font path etc while generating the final styles.
By default Webpack loader appends the publicPath config with Images URL, font path etc while generating the final styles.
*/   
    publicPath: "dist/",
    filename: "bundle.js"
  },
  //   webpack-dev-server compiles your code, but did not know when to send them to the browser. Also, webpack-dev-server stores the compiled bundle in memory, thus the old copy remains in the file system. That's why your browser are always getting the old files.
  devServer: {
      /* Content Base - Tell the server where to serve content from, this is only for serving static files */
     contentBase: path.join(__dirname, "./public"),
    port: 3000,
    /* PublicPath will take precedence than ContentBase, used to determine where the bundles should be 
    served from */
    publicPath: "http://localhost:3000",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // will generate index html in the dist folder
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "./public/index.html"
    // })
  ]
};
