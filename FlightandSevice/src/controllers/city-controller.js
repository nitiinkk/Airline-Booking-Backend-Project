const { CityService } = require('../services/index');
const cityService = new CityService();

/* PUT, body : req.body
*/
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error
        })
    }
} 

/* Delete : /city/:id  => req.params.id*/
const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete a city',
            err : error
        })
    }
}

/* PUT : /city/:id , req.body */
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully updated a city',
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to update a city',
            err : error
        })
    }
}

/* GET : /city/:id -> req.params.id */
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully get a city',
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to get a city',
            err : error
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    get
}