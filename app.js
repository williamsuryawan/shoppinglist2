require('dotenv').config();
const express = require('express');
const cors = require ('cors')
const app = express();
const mongoose = require ('mongoose');

mongoose.connect(`mongodb+srv://${process.env.name}:${process.env.password}@cluster0-dlbfv.mongodb.net/studylist2?retryWrites=true`, {useNewUrlParser: true})
const Router = require('./routes/index.js');

const port = process.env.port || 3000

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', Router);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports = app;