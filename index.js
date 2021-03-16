const { request, response } = require('express')
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, ()=> {
    console.log('Server started on port: ' + PORT )
})

