const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/ts/index.ts",
	output: {
		path: path.resolve("./src/dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].chunk.[chunkhash:7].js",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "babel-loader",
			},
		],
	},
};
