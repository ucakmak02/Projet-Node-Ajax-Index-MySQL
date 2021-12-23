const query = require("../utils/config");

module.exports.addData = async function (req, res) {
    let values = req.body;
    let dataValues = [
        values.prestation,
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
        parseFloat(values.dec),
    ];
    let sql = "INSERT INTO `prestations` (`prestation`, `chantier`, `janv`, `fev`, `mars`, `avril`, `mai`, `juin`,`juil`, `aout`, `sept`, `oct`, `nov`, `dec` ) VALUES (?)";
    await query(sql, [dataValues]);

    const rows = await query("SELECT * FROM prestations");

    return res.json(rows);
};
