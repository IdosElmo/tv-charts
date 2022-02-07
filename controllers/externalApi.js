const conf = require('./../config/keys')
const axios = require('axios');

const getChart = async (req, res) => {

    const params = {
        symbol: 'BINANCE:BTCUSDT',
        interval: '1d',
        theme: 'dark',
        width: '800',
        height: '600',
        format: 'png',
        studies: 'MACD',
        timezone: 'Etc/UTC',
        key: conf.chartImgApiKey
        }

    await axios.get('https://api.chart-img.com/v1/tradingview/advanced-chart', {
        responseType: "arraybuffer",
        params: params
        })
        .then((data) => {
            
            console.log(data)

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