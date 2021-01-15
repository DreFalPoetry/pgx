const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
  }),
  addLessLoader({//less-loader6.x配置
      lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
              // '@primary-color': '#1DA57A'//配置主题颜色；antd提供了其它主题颜色，可根据需要进行切换
          },
      },
  })
)