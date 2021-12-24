const query = require("../utils/config");

module.exports.updateData = async function (req, res) {
    let values = req.body;
    let sql = "UPDATE `prestations` SET `prestation`= ?, `chantier`= ?, `janv`= ?, `fev`= ?, `mars`= ?, `avril`= ?, `mai`= ?, `juin`= ?,`juil`= ?, `aout`= ?, `sept`= ?, `oct`= ?, `nov`= ?, `dec`= ? WHERE id = ? ";
    await query(sql,
        [values.prestation,
        values.chantier,
        parseFloat(values.janv),
        parseFloat(values.fev),
        parseFloat(values.mars),
        parseFloat(values.avril),
        parseFloat(values.mai),
        parseFloat(values.juin),
        parseFloat(values.juil),
        parseFloat(values.aout),
        parseFloat(values.sept),
        parseFloat(values.oct),
        parseFloat(values.nov),
        parseFloat(values.dec), parseInt(values.id)]);

    const rows = await query("SELECT * FROM prestations");

    return res.json(rows);
};