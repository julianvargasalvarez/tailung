const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const erb =  require('./loaders/erb')

environment.loaders.append('erb', erb)
environment.loaders.append('typescript', typescript)
module.exports = environment
