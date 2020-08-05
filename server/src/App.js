const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5050;

const apiRouter = require('./routes/apiRouter');

app.use('/api/v1/movies', apiRouter);

app.listen(PORT, () => console.log(`Server runing in ${PORT} port!`));