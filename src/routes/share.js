const express = require('express');
const router = express.Router();
const shareControllers = require('../controllers/share.js');

router
  .route('/')
  .get(shareControllers.getAll)
  .post(shareControllers.create);

router
  .route('/:shareId')
  .get(shareControllers.getById)
  .patch(shareControllers.updateById)
  .delete(shareControllers.deleteById)

module.exports = router;