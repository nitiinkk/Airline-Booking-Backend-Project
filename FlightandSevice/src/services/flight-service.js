const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper'); 
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight (data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {err: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            throw {error};
        }
    }

    async getAllFlights (data) {
        try {
           const flights = await this.flightRepository.getAllFlights(data);
           return flights;
        } catch (error) {
            throw {error};
        }
    }

    async getFlight (flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        }
        catch(error) {
            throw {error};
        }
    }

    async updateFlight (flightId, data) {
        try {
            const response = await this.flightRepository.updateFlight(flightId, data);
            return response;
        }
        catch(error) {
            throw {error};
        }
    }
}

module.exports = FlightService;