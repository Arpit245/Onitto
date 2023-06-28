const express = require('express');
const movieController = require('../controllers/movieControllers');

const router = express.Router();

router.get('/longest-duration-movies', movieController.getLongestDurationMovies);
router.post('/new-movie', movieController.createMovie);
router.post('/update-runtime-minutes', movieController.updateRuntimeMinutes);


module.exports = router;
