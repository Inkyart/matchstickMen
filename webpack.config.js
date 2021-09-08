const path = require("path");

module.exports = {
	mode: "production",
	entry: "./ts/index.ts",
	output: {
		path: path.resolve("./dist"),
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
