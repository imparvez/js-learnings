const path = require("path");

module.exports = {
    mode: "development", // In which mode your application is running, development or production.
    entry: path.resolve(__dirname, `src`, `app`), // The entry object is where webpack looks to start building the bundle.
    output: { // Configuring the output configuration options tells webpack how to write the compiled files to disk.
        path: path.resolve(__dirname, `dist`),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: { // These options change how modules are resolved
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }
}