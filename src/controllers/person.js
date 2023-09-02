const { Person, Shareholder } = require('../models');
const helpers = require('./helpers');

const create = (req, res) => helpers.createItemPlusShareholder('person', res, req.body);

const getAll = (req, res) => helpers.getAllItems('person', res);

const getById = (req, res) => helpers.getItemById('person', res, req.params.personId);

const updateById = (req, res) => helpers.updateItem('person', res, req.body, req.params.personId);

const deleteById = (req, res) => helpers.deleteItem('person', res, req.params.personId);

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}