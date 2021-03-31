module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        date_of_birth: {
            type: DataTypes.DATEONLY
        }
    };

    const PersonModel = connection.define('Person', schema);
    return PersonModel;
}