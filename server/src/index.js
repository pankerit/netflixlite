require('dotenv').config()
const express = require('express');
const cors = require('cors')
const { connectDB } = require('../src/module/database')

const start = async () => {
  await connectDB()
  const app = express();

  app.use('/static', express.static(__dirname + '/static'))
  app.use('/api', cors(), require('./routes'))



  app.listen(5000, '0.0.0.0', () => console.log(`Server ready on localhost:5000`))
}

start()