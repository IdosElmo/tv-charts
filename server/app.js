const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override')

const chartsRouter = require('./../routes/charts')
const external = require('./../routes/external')
const homeRouter = require('./../routes/home')

const port = process.env.PORT || 5000;

const app = express()

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors());
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

app.use('/api/charts', chartsRouter)
app.use('/external/api', external)
app.use('/', homeRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})