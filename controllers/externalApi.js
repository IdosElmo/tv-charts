const conf = require('./../config/keys')
const axios = require('axios');

const getChart = async (req, res) => {

    const context = req.session.context

    const params = {
        symbol: context.symbol,
        interval: context.intervals,
        theme: context.theme,
        width: context.width,
        height: context.height,
        format: 'png',
        studies: context.studies,
        timezone: 'Etc/UTC',
        key: conf.chartImgApiKey
        }

    await axios.get('https://api.chart-img.com/v1/tradingview/advanced-chart', {
        responseType: "arraybuffer",
        params: params
        })
        .then((data) => {

            const t = data.headers['content-type'];
            const d = btoa(data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))

            const src = `data:${t};base64,${d}`

            res.render('index', { img: src });
            

    }).catch();
};

module.exports = {
    getChart: (req, res) => {
        return getChart(req, res);
    }
}