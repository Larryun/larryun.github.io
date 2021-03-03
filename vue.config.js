module.exports = {
  // publicPath: '/larryun.github.io/'
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
          args[0].title = "Larry Un"
          return args
        })
      }
}