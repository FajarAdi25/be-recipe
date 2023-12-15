/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const recipeRouter = require('./routes/recipeRoute');

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(recipeRouter);

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('API has running');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
