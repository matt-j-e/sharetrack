const express = require('express');
const router = express.Router();
const shareholderControllers = require('../controllers/shareholder.js');

router
  .route('/')
  .get(shareholderControllers.getAll)
  .post(shareholderControllers.create);

router
  .route('/:shareholderId')
  .get(shareholderControllers.getById)
  .patch(shareholderControllers.updateById)
  .delete(shareholderControllers.deleteById)

module.exports = router;