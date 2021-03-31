const express = require('express');
const router = express.Router();
const companyControllers = require('../controllers/company.js');

router
  .route('/')
  .get(companyControllers.getAll)
  .post(companyControllers.create);

router
  .route('/:companyId')
  .get(companyControllers.getById)
  .patch(companyControllers.updateById)
  .delete(companyControllers.deleteById)

module.exports = router;