'use strict'
const express = require('express')
const cors = require('cors')
const fileupload = require('express-fileupload')
const fileAnalyser = require('./file-analyser')

const app = express()

app.use('/public', express.static(process.cwd() + '/public'))
app.get('/', (req, res) => res.sendFile(process.cwd() + '/views/index.html'))

app.get('/hello', (req, res) => res.json({ greetings: 'Hello, API' }))

app.use('/api', [cors(), fileupload()])
app.post('/api/fileanalyse', fileAnalyser)

app.listen(process.env.PORT || 3000, _ => console.log('Node.js listening ...'))
