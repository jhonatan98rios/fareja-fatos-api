const googleNewsAPI = require("google-news-json");

function _newsFormatter(info){
  return {
    title: info.title,
    link: info.link,
  }
}

async function recommenderService(){
  let news = await googleNewsAPI.getNews(googleNewsAPI.SEARCH, 'Covid', "pt-BR")
  news = news.items.slice(0,3)
  return news.map(info => _newsFormatter(info))
}

module.exports = recommenderService