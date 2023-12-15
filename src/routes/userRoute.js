const express = require('express');
const {
  allUsersAndQuery, register, login, editUser, deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/users', allUsersAndQuery);
router.post('/register', register);
router.post('/login', login);
router.put('/user/:users_id', editUser);
router.delete('/user/:users_id', deleteUser);

module.exports = router;
