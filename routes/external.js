const { getChart } = require('./../controllers/externalApi')
const express = require('express');
const router = express.Router();


router.get('/test', getChart);

router.get('/testing', (req, res) => {
    const context = req.session.context
    console.log(context)

    const params = {
        symbol: context.symbol,
        interval: context.intervals,
        theme: context.theme,
        width: context.width,
        height: context.height,
        studies: context.studies
    }

    console.log(params)

    res.render('index', { img: "none"})
})

module.exports = router