const express = require('express');
const router = express.Router();
const shareholderTypeControllers = require('../controllers/shareholder_type.js');

router
  .route('/')
  .get(shareholderTypeControllers.getAll)
  .post(shareholderTypeControllers.create);

router
  .route('/:transactionTypeId')
  .get(shareholderTypeControllers.getById)
  .patch(shareholderTypeControllers.updateById)
  .delete(shareholderTypeControllers.deleteById)

module.exports = router;