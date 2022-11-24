const path = require('path')

// 获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // baseUrl: "/",
  // // 输出目录
  outputDir: "dissst",
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack(config) {
    // set svg-sprite-loader
    // 第一步：让其他svg loader不要对src/assets/imgs/svgs进行操作
    config.module
      .rule("svg")
      .exclude.add(path.resolve(__dirname, 'src/icons'))
      .end();
    // 第二步：使用svg-sprite-loader 对 src/assets/imgs/svgs下的svg进行操作
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/icons'))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      //定义规则 使用时 <svg class="icon"> <use xlink:href="#icon-svg文件名"></use>  </svg>
      .options({
        symbolId: "[name]"
      })
      .end();
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 3, // 转换后的精度，即小数点位数
            propList: [
              "*"
            ], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            landscapeUnit: 'vh', // 横屏时使用的单位
            landscapeWidth: 667, // 横屏时使用的视口宽度
            selectorBlackList: [], // 指定不转换为视窗单位的类名
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // landscape: false, // 是否处理横屏情况
            exclude: /(\/|\\)(node_modules)(\/|\\)/, // 设置忽略文件，用正则做目录名匹配
          })
        ]
      }
    }
  }
}
// const path = require('path');
// function resolve(dir) {
//   // 路径可能与你的项目不同
//   return path.join(__dirname, dir)
// }

// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('svg')
//       .uses.clear()
//     config.module
//       .rule('svg1')
//       .test(/\.svg$/)
//       .use('svg-sprite')
//         .loader('svg-sprite-loader')
//         .options({
//           symbolId: 'icon-[name]'
//         })
//         .end()
//       .include
//         .add(resolve('src/icons'))
//         .end()
//   }
// }