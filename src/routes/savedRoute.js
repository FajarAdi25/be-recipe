const express = require('express');
const { allSaved, deleteSaved, addSaved } = require('../controllers/savedController');

const router = express.Router();

router.get('/saved', allSaved);
router.post('/saved', addSaved);
router.delete('/saved/:saved_id', deleteSaved);

module.exports = router;
