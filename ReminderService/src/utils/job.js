const cron = require('node-cron');
const emailService = require('../service/email-service');
const sender = require('../config/emailConfig');

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await emailService.fetchPendingMails();
        response.forEach((email) => {
            sender.sendBasicMail({
                to: email.recepientEmail,
                subject: email.subject,
                content: email.content
            }, async(err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await emailService.updateTicket(email.id, {status: "SUCCESS"});
                }
            });
        })
        console.log(response);
    })
}

module.exports = setupJobs;