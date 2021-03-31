module.exports = (connection, DataTypes) => {
    const schema = {
    };

    const ShareholderModel = connection.define('Shareholder', schema);
    return ShareholderModel;
}