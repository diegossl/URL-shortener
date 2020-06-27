const express = require('express')
const router = express.Router()
const Gateway = require('../api/Gateway')

router.get('/:hash', Gateway.getShortenedUrl)
router.post('/url', Gateway.getShortenedUrlAndSave)

module.exports = router
