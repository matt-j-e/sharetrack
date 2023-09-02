const { Company, Share, Transaction, Shareholder } = require('../models');
const helpers = require('./helpers');

const create = (req, res) => helpers.createItemPlusShareholder('company', res, req.body);

const getAll = (req, res) => helpers.getAllItems('company', res);

const getById = (req, res) => helpers.getItemById('company', res, req.params.companyId);

const updateById = (req, res) => helpers.updateItem('company', res, req.body, req.params.companyId);

const deleteById = (req, res) => helpers.deleteItem('company', res, req.params.companyId);

const getTransactions = (req, res) => {
    return Transaction.findAll({ include: {
        model: Share,
        where: {
            CompanyId: req.params.companyId
            } 
        }
    }).then((items) => res.status(200)
    .json(items));
};

const getShareholders = (req, res) => {
    Share.findAll({ where: { CompanyId: req.params.companyId } })
    .then((shares) => {
        shares.forEach((share) => {
            Transaction.findAll({ 
                where: { ShareId: share.id },
                include: { model: Shareholder } 
            })
            .then((transactions) => {
                transactions.forEach(transaction => {
                    console.log(transaction);
                })
                res.status(200)
                .json(transactions);
            })
            
        });
        // res.sendStatus(200);
        // .json(transactions)
    });
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    getTransactions,
    getShareholders
};