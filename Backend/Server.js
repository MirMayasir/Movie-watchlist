const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'your_password', // replace with your MySQL password
    database: 'movies_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/movies', (req, res) => {
    const { id, title, description, releaseYear, genre, watched, rating, review } = req.body;
    const query = 'INSERT INTO movies (id, title, description, releaseYear, genre, watched, rating, review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    db.execute(query, [id, title, description, releaseYear, genre, watched, rating, review], (err, results) => {
        if (err) {
            console.error('Error adding movie to database:', err);
            res.status(500).send('Error adding movie to database');
            return;
        }
        res.status(201).send(req.body);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
