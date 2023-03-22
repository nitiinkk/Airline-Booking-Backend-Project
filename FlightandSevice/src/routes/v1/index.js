const express = require('express');
const {FlightMiddlewares} = require('../../middlewares/index');

const cityController = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');
const airportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.patch('/city/:id', cityController.update);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);

router.post('/flights', FlightMiddlewares.validateCreateFlight, flightController.create);

router.get('/flights/:id', flightController.get);
router.get('/	', flightController.getAll);
router.patch('/flights/:id', flightController.update);

router.post('/airports', airportController.create);

module.exports = router;