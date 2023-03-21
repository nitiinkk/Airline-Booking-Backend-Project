const express = require('express');
const bodyParser = require('body-parser');
const { PORT } =  require('./config/serverConfig');
const db = require('./models/index');
const apiRoutes = require('./routes/index');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
    })
}

setupAndStartServer();