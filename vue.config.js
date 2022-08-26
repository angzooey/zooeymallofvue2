const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        /*@已经配置-在module的配置文件*/
        'assets':'@/assets',
        'network':'@/network',
        'common':'@/common',
        'views':'@/views',
        'components':'@/components',
      }
    }
  }


})
