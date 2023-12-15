const connectDb = require('../configs/db');

const getUserAndQuery = async (query) => {
  const queryUser = await connectDb.query(
    `SELECT 
        *
    FROM  
        users
    WHERE
        users.${query.columnName}
    ILIKE 
        '%${query.search}%' 
    ORDER BY 
        users.${query.columnName} ${query.sort} 
    LIMIT 
        ${query.limit} 
    OFFSET 
        ${query.offset}`,
  );
  return queryUser;
};

const findEmail = async (body) => {
  const queryUser = await connectDb.query(
    `SELECT * FROM users WHERE users.email = '${body.email}'`,
  );
  return queryUser;
};

const findId = async (id) => {
  const queryUser = await connectDb.query(
    `SELECT * FROM users WHERE users.users_id=${id}`,
  );
  return queryUser;
};

const createUser = async (body) => {
  const queryUser = await connectDb.query(
    `INSERT INTO users (username, email, password, phone_number) VALUES ('${body.username}','${body.email}','${body.password}','${body.phone_number}')`,
  );
  return queryUser;
};

const loginUser = async (body) => {
  const queryUser = await connectDb.query(
    `SELECT * FROM users WHERE users.email = '${body.email}' AND users.password = '${body.password}'`,
  );
  return queryUser;
};

const updateUser = async (body, id) => {
  const queryUser = await connectDb.query(
    `UPDATE users SET username='${body.username}', email='${body.email}', phone_number='${body.phone_number}', password='${body.password}', image='${body.image}' WHERE users.users_id = ${id}`,
  );
  return queryUser;
};

const deleteUser = async (id) => {
  const queryUser = await connectDb.query(
    `DELETE FROM users WHERE users.users_id=${id}`,
  );
  return queryUser;
};

module.exports = {
  getUserAndQuery,
  findEmail,
  findId,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
};
