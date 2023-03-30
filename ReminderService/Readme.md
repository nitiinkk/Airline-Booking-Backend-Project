### ReminderService to send Mails for Airline Booking Backend Project

### Setup
`We use nodemailer package to send mails`
`1. Confiure App password for Email_Password for sending mails`
`2. npx sequelize init`
`3.config.json
{
  "development": {
    "username": "root",
    "password": "root@12345",
    "database": "REMAINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
`
` 4. to create db : npx sequelize db:create`
`5. to create model : npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date`
`6. npx sequelize db:migrate`