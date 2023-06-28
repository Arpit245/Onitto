const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Movie routes
app.use('/api/v1', movieRoutes);

// Rating routes
app.use('/api/v1', ratingRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
