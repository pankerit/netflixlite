const SERVER_URL = process.env.REACT_APP_SERVER_URL
const getImg = (kinopoisk_id, quality) => {
  let url = SERVER_URL
  switch (quality) {
    case 'sm':
      return `${url}/static/sm_imgs/${kinopoisk_id}.jpg`
    case 'md':
      return `${url}/static/md_imgs/${kinopoisk_id}.jpg`
    case 'lg':
      return `${url}/static/lg_imgs/${kinopoisk_id}.jpg`
    default:
      return `${url}/static/md_imgs/${kinopoisk_id}.jpg`
  }
}

module.exports = getImg