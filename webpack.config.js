const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry: './client/index.js',
	output:{
		path:path.resolve(__dirname,'client/assets'),
		filename:'bundle.js',		
	},
	devServer:{
		contentBase: path.join(__dirname, "client/assets"),
	},

	//Commenting plugins enhances Hot module rendering speed
	plugins:[
		// new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
		new HtmlWebpackPlugin({template: './client/assets/index.html'})
	],

	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:'/node_modules/'
			},
			{
				test:/\.jsx$/,
				loader:'babel-loader',
				exclude:'/node_modules/'
			}
		],
	},
	resolve: {
				extensions: ['.js','.jsx']
			}
}