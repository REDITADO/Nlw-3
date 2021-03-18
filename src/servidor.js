const express = require("express")
const server = express()
const path = require('path')

const pages = require('./pages.js')
server.use(express.static('images'))
.set('views', path.join(__dirname, 'views'))
.set('view engine','hbs')

server.use(express.urlencoded({extended: true}))
server.get('/',pages.index)
server.get('/orphanate',pages.orphanate)
server.get('/orphanege',pages.orphanege)
server.get('/criar-orfanato',pages.criarOrfanato)
server.post('/save-orphanege', pages.saveOrphanege)

server.listen(8080)