const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  const sql = 'INSERT INTO feedbacks (name, message) VALUES (?, ?)';
  db.query(sql, [name, message], (err) => {
    if (err) return res.status(500).send('Error saving feedback');
    res.sendStatus(200);
  });
});

app.get('/feedbacks', (req, res) => {
  db.query('SELECT * FROM feedbacks ORDER BY timestamp DESC LIMIT 10', (err, results) => {
    if (err) return res.status(500).send('Error fetching feedbacks');
    res.json(results);
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
