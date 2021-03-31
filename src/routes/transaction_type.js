const express = require('express');
const router = express.Router();
const transactionTypeControllers = require('../controllers/transaction_type.js');

router
  .route('/')
  .get(transactionTypeControllers.getAll)
  .post(transactionTypeControllers.create);

router
  .route('/:transactionTypeId')
  .get(transactionTypeControllers.getById)
  .patch(transactionTypeControllers.updateById)
  .delete(transactionTypeControllers.deleteById)

module.exports = router;