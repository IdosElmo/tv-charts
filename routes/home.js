const express = require('express');
const router = express.Router();


router.get('/', async(req, res) => {
    res.render('main')
});

router.post('/', async (req, res) => {

});

module.exports = router