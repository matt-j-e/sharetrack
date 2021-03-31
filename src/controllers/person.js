const { Person } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('person', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('person', res);

exports.getById = (req, res) => helpers.getItemById('person', res, req.params.personId);

exports.updateById = (req, res) => helpers.updateItem('person', res, req.body, req.params.personId);

exports.deleteById = (req, res) => helpers.deleteItem('person', res, req.params.personId);