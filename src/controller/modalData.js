const query = require('../utils/config');

module.exports.modalData = async function (req, res) {
    var id = req.body.id;
    var sql = "SELECT * FROM `prestations` WHERE  id = (?)";

    const rows = await query(sql, id)

    return res.json(rows[0]);
};