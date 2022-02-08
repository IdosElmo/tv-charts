const express = require('express');
const router = express.Router();
const assert = require('assert')


router.get('/', async(req, res) => {
    res.render('main')
});

router.post('/', async (req, res) => {
    let context = req.body;

    context.studies = []

    try {
        assert(typeof context["symbol"] == "string", "Symbol must be a valid string!");
        assert(/^\d+$/.test(context['width']) == true, "Width must be a valid number!");
        assert(/^\d+$/.test(context['height']) == true, "Height must be a valid number!");
        // below is redundant
        // assert(typeof context["intervals"] == "string");
        // assert(typeof context["theme"] == "string");

        if (typeof context['atr-source-select'] != "undefined") { 
            assert(/^\d+$/.test(context['atr-period']) == true, "ATR period must be a number!")
            context["atr-period"] = parseInt(context["atr-period"]);
            context.studies.push(`ATR:${context["atr-period"]},${context["atr-source-select"]}`)


        }
        
        context["width"] = parseInt(context["width"]);
        context["height"] = parseInt(context["height"]);
    
        req.session.context = context;
        res.redirect('external/api/test');
    
    } catch (error) {
        res.send(`<script>alert("${error.message}"); window.location.href = '/';</script>`);
    }
    
});

module.exports = router