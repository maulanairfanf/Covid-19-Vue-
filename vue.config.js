module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'https://covid19.mathdro.id/api/'
  }
}