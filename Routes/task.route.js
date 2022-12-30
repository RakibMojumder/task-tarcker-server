const express = require('express');
const { getAllTask, postTask, deleteTask } = require('../Controllers/task.controller');
const router = express.Router();

router.get('/', getAllTask);
router.post('/', postTask);
router.delete('/:id', deleteTask)

module.exports = router;