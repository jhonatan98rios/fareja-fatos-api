const fakeApi = require('../database/fakeApi')

function hotNews(){
  const selectedNews = []
  const indexes = []

  for(let i=0; i < 3; i++){
    let randomValue = ~~(Math.random() * 11)

    if(indexes.indexOf(randomValue) == -1){
      indexes.push(randomValue)
    }else {
      if(randomValue < 9){
      indexes.push(randomValue + 1)
      }else {
      indexes.push(randomValue - 1)
      }
    }
  }

  indexes.map(index => {
    selectedNews.push(fakeApi[index])
  })

  return selectedNews
}

module.exports = hotNews
