var dotenv = require('dotenv');
dotenv.load();
var dbconfig = function () {
  var url = "";
  if (!!process.env.PROTOCOL) {
    url = process.env.PROTOCOL + '://';
  } else {
    url = 'http://';
  }
  if (!!process.env.USERNAME) {
    url = url + process.env.USERNAME + ":";
  }
  if (!!process.env.PASSWORD) {
    url = url + process.env.PASSWORD + "@";
  }
  url = url + process.env.DOMAIN;
  return url;
};

exports.dbconfig = dbconfig;