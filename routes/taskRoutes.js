const express = require('express');
const userController = require('../controllers/taskController');

const router = express.Router();

router.get('/', userController.getTasks);
router.get('/:id', userController.getTask);
router.post('/', userController.createTask);
router.put('/:id', userController.updateTask);
router.delete('/:id', userController.deleteTask);

module.exports = router;