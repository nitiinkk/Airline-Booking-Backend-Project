const {CrudRepository} = require('./index');

class AirportRepository extends CrudRepository{
    constructor(model) {
        super(model);
    }
}

module.exports = AirportRepository;