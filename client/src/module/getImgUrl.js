const SERVER_URL = process.env.REACT_APP_SERVER_URL
const getImgUrl = (kinopoisk_id, quality) => {
  let url = SERVER_URL
  switch (quality) {
    case 'small':
      return `${url}/static/small_imgs/${kinopoisk_id}.jpg`
    case 'high':
      return `${url}/static/imgs/${kinopoisk_id}.jpg`
  }
}

module.exports = getImgUrl