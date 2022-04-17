const path = require("path")
module.exports = {
  outputDir: "./build",
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9090',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@":path.resolve(__dirname,'./src'),
        components: "@/components"
      }
    }
  }
}
