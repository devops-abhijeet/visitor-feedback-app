const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-host', // or 'mysql' if using Docker
  user: 'root',
  password: 'abhi',
  database: 'feedback_app'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

module.exports = connection;
