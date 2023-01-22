const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const listRoutes = require('./routes/memlist')
const app = express()



mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://nikita1:6344697Tab@qibus.et67bgv.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });


app.use(morgan('dev'))
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api/', listRoutes)




module.exports = app