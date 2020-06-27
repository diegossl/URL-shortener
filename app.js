const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const gatewayRouter = require('./routes/gateway')
const database = require('./config/Database')

dotenv.config()
database.getInstance().connect()

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/', gatewayRouter)

module.exports = app
