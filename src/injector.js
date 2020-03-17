const spur = require('spur-ioc');

const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const ejs = require('ejs');

module.exports = function injector() {
  const ioc = spur.create('spur-web');

  ioc.registerDependencies({
    express,
    methodOverride,
    cookieParser,
    bodyParser,
    expressWinston,
    ejs
  });

  ioc.registerFolders(__dirname, [
    'handlers',
    'middleware',
    'webserver'
  ]);

  return ioc;
};
