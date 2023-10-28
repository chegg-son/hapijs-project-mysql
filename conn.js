/* eslint-disable indent */
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'todo'
})

module.exports = db
