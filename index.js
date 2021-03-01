const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const hotNews = require('./services/newsService')
const classifierController = require('./services/classifierService')
const stringParserService = require('./services/stringParserService')
const recommenderService = require('./services/recommenderService')


app.get('/', (req, res) => {
  res.send('Ok')
})

app.get('/hot-news', (req, res) => {
  const result = hotNews()
  res.send(result)
})

app.post('/classifier', async (req, res) => {
  const result = await classifierController(req.body.text)
  const keywords = stringParserService(req.body.text)
  const news = await recommenderService(keywords)

  res.json({
    result,
    news
  })
})

app.listen(process.env.PORT || 3000)