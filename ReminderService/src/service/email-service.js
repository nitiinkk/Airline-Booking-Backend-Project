const sender  = require('../config/emailConfig');

const sendBasicMail = (mailFrom, mailTo, mailSubject, mailBody) => {
    console.log(mailFrom);
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    });
}

module.exports = {
    sendBasicMail
}