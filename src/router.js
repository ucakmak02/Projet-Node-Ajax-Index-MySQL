const express = require('express');
const router = express.Router();
const getIndex = require('./controller/getIndex')
const addData = require('./controller/addData')
const getInitialData = require('./controller/getInitialData')
const deleteData = require('./controller/deleteData')
const filter = require('./controller/filter')
const modalData = require('./controller/modalData')
const updateData = require('./controller/updateData')

router.get('/',getIndex.index);
router.get('/getInitialData',getInitialData.getInitialData);
router.post('/addData',addData.addData);
router.post('/delete',deleteData.deleteData);
router.post('/filterChantier',filter.filter);
router.post('/modalData',modalData.modalData);
router.post('/updateData',updateData.updateData);


module.exports = router;