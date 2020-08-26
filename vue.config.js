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
