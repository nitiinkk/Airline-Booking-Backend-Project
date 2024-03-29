const express = require('express');
const bodyParser = require('body-parser');
const { PORT } =  require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use('/api', ApiRoutes);


    if (process.env.SYNC_DB) {
        db.sequelize.sync({alter : true});
    }

    app.listen(PORT, () => {
        console.log(`AuthServer started at ${PORT}`);
    })
}

setupAndStartServer();