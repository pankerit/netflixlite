const axios = require('axios')
const { ObjectId } = require('mongodb')
const { getDB } = require('../module/database')

const API = process.env.COLLAPS_URI


const db = getDB()
exports.getHome = async (req, res) => {
  const data = await db.collection('other').findOne(ObjectId('5ddc33d86be84694441e323e'))
  delete data._id
  const ids = []
  for (let key in data) {
    ids.push(...data[key])
  }
  const movies = await db.collection('movies').find({ kinopoisk_id: { $in: ids } }).toArray()

  const payload = Object.keys(data).reduce((acc, cur) => {
    acc[cur] = []
    for (let id of data[cur]) {
      const movie = movies.find(movie => movie.kinopoisk_id === id)
      if (movie) acc[cur].push(movie)
    }
    return acc
  }, {})

  res.json(payload)
}

exports.search = async (req, res) => {
  const str = req.query.search
  const data = await db.collection('movies').find(
    { $text: { $search: str } },
    { score: { $meta: "textScore" } }
  ).project({ score: { $meta: "textScore" }, _id: 0, description: 0, director: 0, slogan: 0 })
    .sort({ score: { $meta: "textScore" } }).limit(5).toArray()
  res.json(data)
}