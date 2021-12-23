const query = require('../utils/config');

module.exports.filter = async function (req, res) {
    /*  
        Cette partie a été écrite de cette façon pour utiliser
        la structure INDEX. Il aurait pu être écrit avec une seule ligne de 
        SQL. Si les filtres augmentent, ils peuvent être remplacés. 
    */
    let valueChantier = req.body.valueChantier;
    let valuePrestation = req.body.valuePrestation;
    let rows;
    if (valueChantier != "tout" && valuePrestation == "tout") {
        let sql = "SELECT * FROM prestations USE INDEX (chantier) WHERE chantier= (?)";
        rows = await query(sql, valueChantier)
    } else if (valueChantier == "tout" && valuePrestation != "tout") {
        let sql = "SELECT * FROM prestations USE INDEX (prestation) WHERE prestation= (?)";
        rows = await query(sql, valuePrestation)
    } else if (valueChantier != "tout" && valuePrestation != "tout") {
        let sql = "SELECT * FROM prestations WHERE chantier= (?) AND prestation= (?) ";
        rows = await query(sql, [valueChantier, valuePrestation])
    } else {
        let sql = "SELECT * FROM prestations ";
        rows = await query(sql)
    }
    return res.json(rows);
};