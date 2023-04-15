const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');
const jobs = require('./utils/job');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes);

    if(process.env.SYNC_DB) {
        db.sequelize.sync({alter: true});
    }

    app.listen(PORT , ()=> {
        console.log(`Server started on PORT ${PORT} for RemainderService`);
        jobs(); 
    })
}

setupAndStartServer();