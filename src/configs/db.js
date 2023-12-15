require('dotenv').config();
const pg = require('pg');

const connectDb = new pg.Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connectDb.connect((error) => {
  if (error) {
    console.log(error);
  }
});

module.exports = connectDb;
