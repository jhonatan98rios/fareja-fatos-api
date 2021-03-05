const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const helmet = require('helmet');
const cors = require('cors');

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.disable('x-powered-by')


const hotNews = require('./services/newsService')
const classifierService = require('./services/classifierService')
const stringParserService = require('./services/stringParserService')
const recommenderService = require('./services/recommenderService')
const  { saveNews, getNews} = require('./controller/saveNews');



app.get('/', (req, res) => {
  res.send('Ok')
})

app.get('/hot-news', (req, res) => {
  const result = hotNews()
  res.send(result)
})

app.post('/classifier', async (req, res) => {
  const result = await classifierService(req.body.sample)
  const keywords = stringParserService(req.body.sample)
  const news = await recommenderService(keywords)

  res.json({
    result,
    news
  })
})

app.post('/save_news', async (req, res) => {
  const result = await saveNews(req.body.sample)
  res.status(200).send(result)
})

app.get('/get_new', async (req, res) => {
  const result = await getNews()
  res.status(200).send(result)
})

app.listen(process.env.PORT || 5000)