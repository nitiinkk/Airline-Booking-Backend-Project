const express = require('express');
const TicketController = require('../../controllers/ticket-controller');

const router = express.Router();

router.get('/ticket', TicketController.create);

module.exports = router;