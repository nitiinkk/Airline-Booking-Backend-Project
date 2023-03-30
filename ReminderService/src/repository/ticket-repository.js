const {NotificationTicket} = require('../models/notificationticket');

class TicketRepository {
    async getAll () {
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;  
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;