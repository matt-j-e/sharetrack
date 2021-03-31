module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        crn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        incorp_date: {
            type: DataTypes.DATEONLY
        }
    };

    const CompanyModel = connection.define('Company', schema);
    return CompanyModel;
}