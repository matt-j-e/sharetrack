const { Company } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('company', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('company', res);

exports.getById = (req, res) => helpers.getItemById('company', res, req.params.companyId);

exports.updateById = (req, res) => helpers.updateItem('company', res, req.body, req.params.companyId);

exports.deleteById = (req, res) => helpers.deleteItem('company', res, req.params.companyId);