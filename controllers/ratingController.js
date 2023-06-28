const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Arpit@123',
  database: 'onitto',
});


exports.getTopRatedMovies = (req, res) => {
  const sql = `SELECT tconst, primaryTitle, genres, averageRating FROM movies JOIN ratings USING (tconst) WHERE averageRating > 6.0 ORDER BY averageRating DESC`;

  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error retrieving top rated movies:', error);
      res.status(500).json({ error: 'An error occurred while retrieving movies.' });
    } else {
      res.json(results);
    }
  });
};


exports.getGenreMoviesWithSubtotals = (req, res) => {
  const sql = `SELECT genres, primaryTitle, numVotes FROM movies GROUP BY genres, primaryTitle WITH ROLLUP`;

  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error retrieving genre movies with subtotals:', error);
      res.status(500).json({ error: 'An error occurred while retrieving movies.' });
    } else {
      res.json(results);
    }
  });
};
