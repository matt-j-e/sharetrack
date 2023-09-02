const { ShareholderType } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('shareholderType', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('shareholderType', res);

exports.getById = (req, res) => helpers.getItemById('shareholderType', res, req.params.shareholderTypeId);

exports.updateById = (req, res) => helpers.updateItem('shareholderType', res, req.body, req.params.shareholderTypeId);

exports.deleteById = (req, res) => helpers.deleteItem('shareholderType', res, req.params.shareholderTypeId);