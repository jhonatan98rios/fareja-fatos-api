const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

async function connect(){
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });

  pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
  });

  return pool
}


async function saveNews(sample, label) {

  const db = await connect()
  const result = await db.query(
    "INSERT INTO news (sample, label, checked) VALUES ($1, $2, $3)",
    [sample, label, false]
  ).catch(err => {
    console.log(err)
  })

  return result.rowCount
}

async function getNews(){

  const db = await connect()
  const result = await db.query(
    "SELECT * FROM news"
  ).catch( err => {
    console.log(err)
  })

  return result.rows
}

module.exports = { saveNews, getNews } 

