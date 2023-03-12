const express = require('express');
const cityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.update('/city/:id', cityController.update);
router.get('/city/:id', cityController.create);
router.get('/city', cityController.getAll);

module.exports = router;