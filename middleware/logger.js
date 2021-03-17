const moment = require('moment')
// const fs = require('fs')

const logger = (request, response, next) => {
  const note = `${request.protocol}://${request.get('host')}${request.originalUrl}: ${moment().format()}`
  console.log(note)
  next()
}


module.exports = logger