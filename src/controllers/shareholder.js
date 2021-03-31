const { Shareholder } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('shareholder', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('shareholder', res);

exports.getById = (req, res) => helpers.getItemById('shareholder', res, req.params.shareholderId);

exports.updateById = (req, res) => helpers.updateItem('shareholder', res, req.body, req.params.shareholderId);

exports.deleteById = (req, res) => helpers.deleteItem('shareholder', res, req.params.shareholderId);