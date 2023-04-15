const cron = require('node-cron');
const emailService = require('../service/email-service');

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await emailService.fetchPendingMails();
        response.forEach((email) => {
            emailService.sendBasicMail(
                "acinonyx219@gmail.com", 
                email.recepientEmail,
                email.subject,
                email.content
            );
        })
        console.log(response);
    })
}

module.exports = setupJobs;