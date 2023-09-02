const Sequelize = require('sequelize');
const CompanyModel = require('./company');
const PersonModel = require('./person');
const ShareholderModel = require('./shareholder');
const ShareModel = require('./share');
const TransactionModel = require('./transaction');
const TransactionTypeModel = require('./transaction_type');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, CLEARDB_DATABASE_URL } = process.env;

const setupDatabase = () => {
    const connection = CLEARDB_DATABASE_URL ?
	new Sequelize(CLEARDB_DATABASE_URL) :
	new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        logging: false,
    });

    const Company = CompanyModel(connection, Sequelize);
    const Person = PersonModel(connection, Sequelize);
    const Shareholder = ShareholderModel(connection, Sequelize);
    const Share = ShareModel(connection, Sequelize);
    const Transaction = TransactionModel(connection, Sequelize);
    const TransactionType = TransactionTypeModel(connection, Sequelize);

    Company.hasMany(Share);
    Share.belongsTo(Company);
    Share.hasMany(Transaction);
    Transaction.belongsTo(Share);
    Shareholder.hasMany(Transaction);
    Transaction.belongsTo(Shareholder);
    Company.hasMany(Shareholder);
    Person.hasMany(Shareholder);
    Shareholder.belongsTo(Person);
    Shareholder.belongsTo(Company);
    Transaction.belongsTo(TransactionType);
    TransactionType.hasMany(Transaction);

    connection.sync({ alter: true });

    return {
        Company,
        Person,
        Shareholder,
        Share,
        Transaction,
        TransactionType,
    };
};

module.exports = setupDatabase();