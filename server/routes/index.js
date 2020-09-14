'use strict'

const base = require('express').Router()

const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

fs
    // read the whole file contents inside current dir
    .readdirSync(__dirname)
    // filters out index.js and other non-JS files
    .filter(file => (file.indexOf !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    // then adds filtered list to the endpoints object
    .forEach(file => {
        base.use(`/${file}`, require(path.join(__dirname, file)))
    })

// exports the endpoints
module.exports = base
