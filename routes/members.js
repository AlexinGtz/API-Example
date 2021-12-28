const express = require('express');
const membersController = require('../controllers/members');

const router = express.Router();

router.get("/members", membersController.getAllMembers);

router.get("/members/:memberId", membersController.getMemberById);

module.exports = router;