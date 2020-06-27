const UrlService = require('./services/UrlService')

module.exports = {
  async getShortenedUrlAndSave (request, response) {
    try {
      const url = request.body.url
      const urlShortened = await UrlService.getUrlAndSave(url)
      return response.status(200).send({ urlShortened: urlShortened })
    } catch (error) {
      console.log(error)
      return response.status(500).send('Erro interno do servidor')
    }
  },

  async getShortenedUrl (request, response) {
    try {
      const hash = request.params.hash
      const fullUrl = await UrlService.getUrl(hash)
      return response.status(200).redirect(fullUrl)
    } catch (error) {
      return response.status(500).send('Erro interno do servidor')
    }
  }

}