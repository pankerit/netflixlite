const { MongoClient } = require('mongodb')

const URI = process.env.MONGO_URI

let _db, _client

const connectDB = async (callback) => {
  const client = await MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  if (callback) callback()
  console.log('Database connected')
  _db = client.db()
  _client = client
}

const getDB = () => {
  if (_db) return _db
  throw '##No database found! getDB function'
}

const closeDB = () => {
  if (_client) {
    _client.close()
    console.log('##DB is closed')
  }
}

module.exports = { connectDB, getDB, closeDB };


