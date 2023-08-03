var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsController.index);
router.get('/add', skillsController.new);
router.get('/:id', skillsController.show);
router.get('/:id/edit', skillsController.edit);
router.post('/', skillsController.create);
router.put('/:id', skillsController.update)
router.delete('/:id', skillsController.deleteOne)


module.exports = router;
