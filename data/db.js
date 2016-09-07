var fs = require('fs')
var path = require('path')

module.exports = {
  getTitles: getTitles,
  getEntry: getEntry,
  saveEntry: saveEntry
}

function getTitles(callback) {
  fs.readFile('./data/blog-entries.json', function (err, json) {
    var blogEntries = JSON.parse(json)
    callback(null, blogEntries)
  })
}

function getEntry(callback) {
  fs.readFile('./data/blog-entries.json', function (err, json) {
    var blogEntries = JSON.parse(json)
    callback(null, blogEntries)
  })
}

function saveEntry(nextPost, cb) {
  var blogEntry = path.join(__dirname, './blog-entries.json')
  fs.readFile(blogEntry, function (err, data) {
    if (!err) {
      var blogArr = JSON.parse(data)
      nextPost.id = (blogArr.length + 1)
      blogArr.push(nextPost)
      var newBlogJson = JSON.stringify(blogArr)
      fs.writeFile(blogEntry, newBlogJson, function (err) {
        if (!err) {
          cb()
        }
      })
    }
  })
}
