const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const members = require('./Members')


// const logger = require('./middleware/logger')
// Init middleware
// app.use(logger)

// Handlebars Middleware
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Homepage route
app.get('/', (req,res)=> {
    return res.render('index', {
        title: 'Member App',
        members
    })
})


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=> {
    console.log('Server started on port: ' + PORT )
})

