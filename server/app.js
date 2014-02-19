var dotenv = require('dotenv');
dotenv.load();
var dbconfig = require('./db').dbconfig();
var Percolator = require('percolator').Percolator;
var server = new Percolator();

var nano = require('nano')(dbconfig);
var animaldb = nano.db.use('animaldb');

server.route('/', {
  GET: function (req, res) {
    animaldb.list(function (err, body) {
      if (err) {
        // something went wrong
        console.log(err);
      } else {
        res.object({animals : body}).send();
      }
    });
  },
  POST: function (req, res) {
    req.onJson(function (err, obj) {
      res.object({posted: obj}).send();
    });
  }
});

server.listen(function (err) {
  console.log('server is listening on port ', server.port);
});