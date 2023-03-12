//right way to interact with models
const { City } = require('../models/index');

class CityRepository {
    async createCity ({name}) {
        try {
            const city = await City.create({name});
            return city;
        }
        catch (error) {
            throw {error};
        }
    }

    async deleteCity (cityId) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }            
            })
            return true;
        }
        catch (error) {
            throw {error};
        }
    }

    async updateCity (cityId, data) {
        try {
            const city = await City.findByPK(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async getCity (cityId) {
        try {
            const city = await City.findByPK(cityId);
            return city;
        }
        catch (err) {
            throw {err};
        }
    }
    
}

module.exports = CityRepository;