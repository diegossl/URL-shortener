const mongoose = require('mongoose')
const Env = require('./Env')
var instance = null

class Database {
  static getInstance () {
    if (!instance) {
      instance = new Database()
    }
    return instance
  }
  
  connect () {
    try {
      mongoose.connect(
        Env.get('CONNECTION_STRING'), 
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Database

