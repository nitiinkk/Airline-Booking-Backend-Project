const axios = require('axios');
const { BookingRepository } = require('../repository/index');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const ServiceError = require('../utils/errors/service-error');

class BookingService {
    constructor () {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking (data) {
        try {
            const flightId = data.flightId;

            //made request to Flight Service
            let getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const response = await axios.get(getFlightRequestURL);
            const flightData = response.data.data;
            let priceOfTheFlight = flightData.price;
            if(data.noOfSeats > flightData.noOfSeats) {
                throw new ServiceError('Something went wrong in booking process', 'Insufficient seats in the Flight');
            }
            const totalCost = data.noOfSeats * priceOfTheFlight;
            const bookingPayload = {...data, totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);

            const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightRequestURL, {totalSeats : flightData.totalSeats - booking.noOfSeats});

            //update the booking status to Booked from InProcess
            const finalBooking  = await this.bookingRepository.update(booking.id, {status: "Booked"});
            return finalBooking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError' || error.name == 'RepositoryError') {
                throw error;
            }
            throw new ServiceError();
        }
    }
}


module.exports = BookingService;