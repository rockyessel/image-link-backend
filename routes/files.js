const express = require('express');
const { upload } = require('../utils/services');
const { PostFiles } = require('../controller/files');

const router = express.Router();

router.post('/', upload.array('files', 5), PostFiles);

module.exports = router;
