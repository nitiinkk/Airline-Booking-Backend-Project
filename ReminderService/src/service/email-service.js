const sender  = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const sendBasicMail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingMails = async (timestamp) => {
    try {
        const repo = new TicketRepository();
        const response = await repo.getAll();
        return response;
    } catch (error) {
        
    }
}

module.exports = {
    sendBasicMail,
    fetchPendingMails
}