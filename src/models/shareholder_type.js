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

    const ShareholderTypeModel = connection.define('ShareholderType', schema);
    return ShareholderTypeModel;
}