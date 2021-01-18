const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
const path = require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({//less-loader6.x配置
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#286cac',//配置主题颜色；antd提供了其它主题颜色，可根据需要进行切换
        '@font-size-base': '12px;',
        'localIdentName': '[local]--[hash:base64:5]'
      }
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    // assets: path.resolve(__dirname, './src/assets'),
    pages: path.resolve(__dirname, './src/pages')
  }),
  addDecoratorsLegacy()
);