const express = require('express');
require("dotenv").config()
const bodyParser = require('body-parser');
const assitantRoute = require('./routes/assistantRoutes')

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api/", assitantRoute)

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))


