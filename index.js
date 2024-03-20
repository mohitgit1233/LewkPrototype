const express = require('express');
require("dotenv").config()
const { createInput } = require('./controller/createinput');
const { createAssistant, uploadFileToAssistant, createThread, createMessage, createRun, seeRunStatus } = require('./controller/assistantController');
const bodyParser = require('body-parser');
const assitantRoute = require('./routes/assistantRoutes')

const app = express()
const PORT = 8000;
app.use(bodyParser.json());
// app.use(express.json())
app.use("/api/", assitantRoute)

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))

// app.get("/createinput",createInput)
// app.get("/createassistant",createAssistant)
// app.get('/uploadfile',uploadFileToAssistant)
// app.get('/createthread',createThread)
// app.post('/sendmessage',createMessage)
// app.get('/createRun',createRun)

// app.get('/seeRunStatus',seeRunStatus)
