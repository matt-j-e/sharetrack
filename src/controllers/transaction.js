const { Transaction } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('transaction', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('transaction', res);

exports.getById = (req, res) => helpers.getItemById('transaction', res, req.params.transactionId);

exports.updateById = (req, res) => helpers.updateItem('transaction', res, req.body, req.params.transactionId);

exports.deleteById = (req, res) => helpers.deleteItem('transaction', res, req.params.transactionId);