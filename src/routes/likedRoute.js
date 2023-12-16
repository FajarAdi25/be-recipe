const express = require('express');
const { allLiked, addLiked, deleteLiked } = require('../controllers/likedController');

const router = express.Router();

router.get('/liked', allLiked);
router.post('/liked', addLiked);
router.delete('/liked/:liked_id', deleteLiked);

module.exports = router;
