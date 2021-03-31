module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    };

    const TransactionTypeModel = connection.define('TransactionType', schema);
    return TransactionTypeModel;
}