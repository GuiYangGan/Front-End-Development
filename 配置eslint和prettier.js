// 第一步
yarn global eslint

// 第二步，在项目文件加下运行，根据提示操作
eslint --init

// 安装 prettier
yarn add prettier -D

// 根目录下添加 .prettierrc.js
module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	insertPragma: true,
	singleQuote: true,
	jsxSingleQuote: false,
	jsxBracketSameLine: false,
	trailingComma: 'none',
	arrowParens: 'always',
	requirePragma: false,
	insertPragma: false,
	overrides: [
		{
			files: '*.js',
			options: {
				parser: 'babel-flow'
			}
		},
		{
			files: '*.ts',
			options: {
				parser: 'babel-ts'
			}
		},
		{
			files: '*.less',
			options: {
				parser: 'less'
			}
		},
		{
			files: '*.css',
			options: {
				parser: 'css'
			}
		}
	]
}

// 安装 eslint-plugin-prettier
yarn add eslint-plugin-prettier --D

// 在 .eslintrc.js 文件中添加相关配置
module.exports = {
	...
	plugins: ['prettier'],
	rules: {
    'prettier/prettier': 'error'
  }
	...
}
