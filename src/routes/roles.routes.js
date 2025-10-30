const express = require('express');
const { createRolConrtroller } = require('../controllers/roles/rol.controller');

const router = express.Router();

router.post('/', createRolConrtroller);

module.exports = router;