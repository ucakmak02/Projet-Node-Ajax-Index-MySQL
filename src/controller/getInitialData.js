const query = require('../utils/config');

module.exports.getInitialData = async function (req, res) {
    const rows = await query('SELECT * FROM prestations');
    return res.json(rows);
};