var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  getPosts: getPosts,
  newPost: newPost
}

function getIndex(req, res) {
  db.getTitles(function (err, entries) {
    var vm = {
      entries: entries
    }
    res.render('home', vm)
  })
}

function getPosts(req, res) {
  db.getEntry(function (err, entries) {
    var vm = {
      entries: entries
    }
    res.render('entry', vm)
  })
}

function newPost(req, res) {
  var nextPost = {
    id: "",
    title: req.body.title,
    date: req.body.date,
    author: req.body.author,
    content: req.body.content
  }
  db.saveEntry(nextPost, function (err) {
    res.redirect('/')
  })
}
