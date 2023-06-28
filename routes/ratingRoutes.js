const express = require('express');
const ratingController = require('../controllers/ratingController');

const router = express.Router();

router.get('/top-rated-movies', ratingController.getTopRatedMovies);
router.get('/genre-movies-with-subtotals', ratingController.getGenreMoviesWithSubtotals);

module.exports = router;
