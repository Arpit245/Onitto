const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Arpit@123',
  database: 'onitto',
});


exports.getLongestDurationMovies = (req, res) => {
  const sql = `SELECT tconst, primaryTitle, runtimeMinutes, genres FROM movies ORDER BY runtimeMinutes DESC LIMIT 10`;

  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error retrieving longest duration movies:', error);
      res.status(500).json({ error: 'An error occurred while retrieving movies.' });
    } else {
      res.json(results);
    }
  });
};


// POST /api/v1/new-movie
exports.createMovie = (req, res) => {
    const { tconst, primaryTitle, runtimeMinutes, genres } = req.body;
    const sql = `INSERT INTO movies (tconst, primaryTitle, runtimeMinutes, genres) VALUES (?, ?, ?, ?)`;
    const values = [tconst, primaryTitle, runtimeMinutes, genres];
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Error creating new movie:', error);
        res.status(500).json({ error: 'An error occurred while creating the movie.' });
      } else {
        res.json({ message: 'success' });
      }
    });
  };



  // Controller function for updating the runtimeMinutes of all movies
exports.updateRuntimeMinutes = (req, res) => {
    // SQL query to increment the runtimeMinutes based on genre
    const query = `
      UPDATE movies
      SET runtimeMinutes = CASE
        WHEN genre = 'Documentary' THEN runtimeMinutes + 15
        WHEN genre = 'Animation' THEN runtimeMinutes + 30
        ELSE runtimeMinutes + 45
      END;
    `;
  
    // Execute the SQL query
    pool.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the runtime minutes.' });
      } else {
        res.json({ success: true });
      }
    });
  };
  
  