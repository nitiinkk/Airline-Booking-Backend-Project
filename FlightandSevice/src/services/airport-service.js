const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService{
    constructor() {
        const airRepository = new AirportRepository();
        super(airRepository);
    }
}

module.exports = AirportService;