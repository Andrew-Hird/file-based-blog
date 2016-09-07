var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var routes = require('./routes')

var PORT = process.env.PORT || 3000
var app = express()
app.use(bodyParser.urlencoded())

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', routes.getIndex)
app.get('/posts', routes.getPosts)
app.post('/new-post', routes.newPost)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
