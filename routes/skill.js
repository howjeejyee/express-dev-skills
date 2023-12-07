const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skill');

router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);

router.post('/', skillsController.create);

module.exports = router;
