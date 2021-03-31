const express = require('express');
const router = express.Router();
const transactionControllers = require('../controllers/transaction.js');

router
  .route('/')
  .get(transactionControllers.getAll)
  .post(transactionControllers.create);

router
  .route('/:transactionId')
  .get(transactionControllers.getById)
  .patch(transactionControllers.updateById)
  .delete(transactionControllers.deleteById)

module.exports = router;