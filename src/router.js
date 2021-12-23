const express = require('express');
const router = express.Router();
const getIndex = require('./controller/getIndex')
const addData = require('./controller/addData')
const getInitialData = require('./controller/getInitialData')
const deleteData = require('./controller/deleteData')
const filter = require('./controller/filter')

router.get('/',getIndex.index);
router.get('/getInitialData',getInitialData.getInitialData);
router.post('/addData',addData.addData);
router.post('/delete',deleteData.deleteData);
router.post('/filterChantier',filter.filter);

module.exports = router;