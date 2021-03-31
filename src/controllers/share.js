const { Share } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('share', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('share', res);

exports.getById = (req, res) => helpers.getItemById('share', res, req.params.shareId);

exports.updateById = (req, res) => helpers.updateItem('share', res, req.body, req.params.shareId);

exports.deleteById = (req, res) => helpers.deleteItem('share', res, req.params.shareId);