module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	jsxBracketSameLine: false,
	trailingComma: 'none',
	arrowParens: 'avoid',
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
