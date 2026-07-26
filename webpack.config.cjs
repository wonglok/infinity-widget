const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const mode = process.env.NODE_ENV || "development"

module.exports = {
  mode: mode,
  entry: {
    widget: path.resolve(__dirname, "./src/widget/main.tsx"),
  },
  output: {
    crossOriginLoading: "use-credentials",
    clean: true,
    library: {
      type: "module",
    },
    path: path.resolve(__dirname, `./public/generated/widget`),
    filename: "./[name].[fullhash].js",
  },
  resolve: {
    alias: {
      ["@"]: path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".mjs", ".jsx", ".ts", ".tsx"],
  },
  experiments: {
    outputModule: true,
  },
  watchOptions: {
    stdin: true,
    ignored: /(public|.next)/,
  },


  // devServer: {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //     "Access-Control-Allow-Headers":
  //       "X-Requested-With, content-type, Authorization",
  //   },
  //   client: {
  //     overlay: false,
  //   },
  //   allowedHosts: "all",
  //   static: {
  //     directory: path.join(__dirname, "./dist"),
  //   },
  //   compress: true,
  //   port: 3002,
  // },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        options: {
          compilerOptions: { noEmit: false },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          //
          // MiniCssExtractPlugin.loader,
          //

          //
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(glb|hdr|gif|png|fbx|jpeg|jpg|mp4|m4v|mp3|fbx)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {},
        },
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: "worker-loader",
          options: {
            esModule: true,
          },
        },
      },
    ],
  },

  plugins: [
    //
    // dont separate css
    // new MiniCssExtractPlugin({
    //   filename: './main.[hash].css',
    // }),

    // new DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') // Note the stringify requirement
    // }),

    // new HtmlWebpackPlugin({
    //   title: "Widget Codebase Dev",
    //   scriptLoading: "module",
    //   filename: "./index.html",
    // }),

    new WebpackManifestPlugin({
      basePath: "",
    }),

    //
    // new CopyPlugin({
    //   patterns: ["./static"],
    // }),

    // ...(process.env.NODE_ENV === 'production' ? [] : [
    //   new LiveReloadPlugin({
    //     protocol: "http",
    //     delay: 0,
    //   })
    // ]),
  ],
};
