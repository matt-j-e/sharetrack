module.exports = (connection, DataTypes) => {
    const schema = {
        class: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    };

    const ShareModel = connection.define('Share', schema);
    return ShareModel;
}