const { responseError, response } = require('../helpers/response');
const { getSaved, createSaved, destroySaved } = require('../models/savedModel');

const savedController = {
  allSaved: async (req, res) => {
    try {
      const result = await getSaved();
      response(res, result.rows, 200, 'get saved successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
  addSaved: async (req, res) => {
    try {
      const { body } = req;
      await createSaved(body);
      response(res, body, 201, 'add saved successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
  deleteSaved: async (req, res) => {
    try {
      const id = req.params.saved_id;
      const result = await destroySaved(id);
      response(res, result.rows, 200, 'delete saved successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
};

module.exports = savedController;
