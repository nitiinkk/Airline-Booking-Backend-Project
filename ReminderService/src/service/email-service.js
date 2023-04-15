const sender  = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();

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

const fetchPendingMails = async () => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {  
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const response = repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    sendBasicMail,
    fetchPendingMails,
    createNotification
}