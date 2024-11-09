const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

// Enable CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON bodies
app.use(bodyParser.json());




// Create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql-prakashs',
  database: 'Erp'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
  console.log('MySQL connected...');
});

// LandingSignup

app.post('/LandingSignup', (req, res) => {
    const { ClientEmail, ClientPassword, ClientPhone, ClientCompanyName, ClientWebsite } = req.body;
  
    const sql = 'INSERT INTO LandingSignup (ClientEmail, ClientPassword, ClientPhone, ClientCompanyName, ClientWebsite) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [ClientEmail, ClientPassword, ClientPhone, ClientCompanyName, ClientWebsite], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });

  // Endpoint to get all registered users
app.get('/LandingSignup', (req, res) => {
  const sql = 'SELECT * FROM LandingSignup';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});



// LandingLogin

app.post('/LandingLogin', (req, res) => {
  const { email, password } = req.body;
  
  // Query to find matching email and password in the LandingSignup table
  const findUserSql = 'SELECT * FROM LandingSignup WHERE ClientEmail = ? AND ClientPassword = ?';
  db.query(findUserSql, [email, password], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      
      // If a user is found
      if (results.length > 0) {
          // Insert successful login attempt in LandingLogin table
          const insertLoginSql = 'INSERT INTO LandingLogin (LoginEmail, LoginPassword, Statuss) VALUES (?, ?, ?)';
          db.query(insertLoginSql, [email, password, 'success'], (err, result) => {
              if (err) {
                  return res.status(500).json({ error: err.message });
              }
              res.status(200).json({ message: 'Login successful' });
          });
      } else {
          // Insert failed login attempt in LandingLogin table
          const insertFailedLoginSql = 'INSERT INTO LandingLogin (LoginEmail, LoginPassword, Statuss) VALUES (?, ?, ?)';
          db.query(insertFailedLoginSql, [email, password, 'failure'], (err, result) => {
              if (err) {
                  return res.status(500).json({ error: err.message });
              }
              res.status(401).json({ message: 'Invalid email or password' });
          });
      }
  });
});








// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  