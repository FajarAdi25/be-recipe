const { response, responseError } = require('../helpers/response');
const {
  findEmail, createUser, loginUser, findId, updateUser, destroyUser, getUserAndQuery,
} = require('../models/userModel');

const userController = {
  allUsersAndQuery: async (req, res) => {
    try {
      const { query } = req;
      const newQuery = {
        columnName: query.columnName || 'username',
        search: query.search || '',
        sort: query.sort || 'ASC',
        limit: query.limit || 10,
        offset: query.offset || 0,
      };
      const result = await getUserAndQuery(newQuery);
      response(res, result.rows, 200, 'get data successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },

  register: async (req, res) => {
    try {
      const { body } = req;
      const { rowCount } = await findEmail(body.email);
      if (rowCount) {
        throw new Error('email already used');
      } else if (body.password !== body.confirmPassword) {
        throw new Error('password invalid');
      }
      await createUser(body);
      response(res, body, 201, 'create successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { body } = req;
      if (!body.email || !body.password) {
        throw new Error('email and password are required');
      }
      await loginUser(body);
      response(res, body, 200, 'login successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },

  editUser: async (req, res) => {
    try {
      const id = req.params.users_id;
      const userId = await findId(id);
      if (!userId.rowCount) {
        throw new Error('user id not found');
      }
      const userData = userId.rows[0];
      const { body } = req;
      const newUserData = {
        username: body.username || userData.username,
        email: body.email || userData.email,
        phone_number: body.phone_number || userData.phone_number,
        password: body.password || userData.password,
        image: body.image || userData.image,
      };
      await updateUser(newUserData, id);
      response(res, newUserData, 200, 'update successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.users_id;
      const userId = await findId(id);
      if (!userId.rowCount) {
        throw new Error('user id not found');
      }
      await destroyUser(id);
      response(res, null, 200, 'delete successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
};

module.exports = userController;
