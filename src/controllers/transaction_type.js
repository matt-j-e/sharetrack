const { TransactionType } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('transactionType', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('transactionType', res);

exports.getById = (req, res) => helpers.getItemById('transactionType', res, req.params.transactionTypeId);

exports.updateById = (req, res) => helpers.updateItem('transactionType', res, req.body, req.params.transactionTypeId);

exports.deleteById = (req, res) => helpers.deleteItem('transactionType', res, req.params.transactionTypeId);