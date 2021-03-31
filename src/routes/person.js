const express = require('express');
const router = express.Router();
const personControllers = require('../controllers/person.js');

router
  .route('/')
  .get(personControllers.getAll)
  .post(personControllers.create);

router
  .route('/:personId')
  .get(personControllers.getById)
  .patch(personControllers.updateById)
  .delete(personControllers.deleteById)

module.exports = router;