var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '35.238.128.54',
    user     : 'team7_user',
    password : 'cheese is life',
    database : 'team7_db'
});

try {
    connection.connect();
    console.log("Connected");
} catch(e) {
    console.log('Database Connection failed:' + e);
}

module.exports = connection;