const express = require('express');
const { createInput } = require('../controller/createinput');
const { createAssistant, uploadFileToAssistant, createThread, createMessage, createRun, seeRunStatus } = require('../controller/assistantController');
const router = express.Router();


router.route('/createinput').get(createInput)
router.route('/createassistant').get(createAssistant)
router.route('/uploadfile').get(uploadFileToAssistant)
router.route('/createthread').get(createThread)
router.route('/sendmessage').post(createMessage)

router.route('/createRun').get(createRun)
router.route('/seeRunStatus').get(seeRunStatus)

module.exports = router;