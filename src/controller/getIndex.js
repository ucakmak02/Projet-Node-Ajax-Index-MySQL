const path = require('path');

module.exports.index = async function(req,res){
    res.sendFile(path.join(__dirname,'../views/index.html'));
};



