const { Flights } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {

    #createFilter (data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice) {
            Object.assign(filter, {price : {[Op.gte]: data.minPrice} });
        }
        return filter;
    }

    async createFlight (data) {
        try {
            const flights = await Flights.create(data);
            return flights;
        }
        catch (err) {
            throw {err};
        }
    }

    async getFlight (flightId) {
        try {
            const flights = await Flights.findAll(data);
            return flights;
        }
        catch (err) {
            throw {err};
        }
    }

    async getAllFlights (filter) {
        try {
            const filterObject = this.#createFilter(filter);
            console.log(filterObject);
            const flights = await Flights.findAll({
                where : filterObject
            })
            return flights;
        }
        catch (err) {
            throw {err};
        }
    }
}

module.exports = FlightRepository;