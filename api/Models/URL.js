const mongoose = require('mongoose')
const Schema = mongoose.Schema

const url = {
  fullUrl: { type: String },
  hash: { type: String },
}
const options = { versionKey: false }

const urlSchema = new Schema(url, options)

module.exports = mongoose.model("URL", urlSchema)