var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsController.index);
router.get('/add', skillsController.new);
router.get('/:id', skillsController.show);
router.post('/', skillsController.create);


module.exports = router;
