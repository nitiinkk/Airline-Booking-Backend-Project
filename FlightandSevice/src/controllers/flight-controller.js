const {SuccessCodes} = require('../utils/error-codes');
const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightCreateData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            duration : req.body.duration,
            totalSeats : req.body.totalSeats,
        }
        const flight = await flightService.createFlight(flightCreateData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
        
    } catch (error) {
        console.log({error});
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a Flight',
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlights(req.query);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        })
        
    } catch (error) {
        console.log({error});
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Flights',
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}