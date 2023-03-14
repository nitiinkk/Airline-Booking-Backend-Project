const { Flights } = require('../models/index');

class FlightRepository {

    async createFlight (data) {
        try {
            const flights = await Flights.create(data);
            return flights;
        }
        catch (err) {
            throw {err};
        }
    }
}

module.exports = FlightRepository;