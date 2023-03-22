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
        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and] : [
                    {price : {[Op.gte]: data.minPrice}},
                    {price : {[Op.lte]: data.maxPrice}},
                ]
            })
        } else {
            if(data.minPrice) {
                Object.assign(filter, {price : {[Op.gte]: data.minPrice} });
            }
            if(data.maxPrice) {
                Object.assign(filter, {price : {[Op.lte]: data.maxPrice}});
            }
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
            const flights = await Flights.findByPk(flightId);
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

     async updateFlight (flightId, data) {
        try {
            await Flights.update(data, {
                where : {
                    id : flightId
                }
            });
            return true;
        }
        catch (err) {
            throw {err};
        }
    }
}

module.exports = FlightRepository;