const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const theme = require('./them.json')

module.exports = override(
  fixBabelImports('antd-mobile', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme,
    },
  })
)
