const URL = require('../Models/URL')
const Env = require('../../config/Env')

module.exports = {
  async getUrlAndSave (url) {
    var hash = await URL
      .findOne({ fullUrl: url })
      .select({ _id: 0,  hash: 1 })
      .hash

    if (!hash) {
      hash = Date.now()
      await URL.create({
        fullUrl: url,
        hash: hash
      })
    }
    return `${Env.get('APP_URL')}/${hash}`
  },

  async getUrl (hash) {
    const res = await URL.findOneAndDelete({ hash: hash })
    return res.fullUrl
  }
}