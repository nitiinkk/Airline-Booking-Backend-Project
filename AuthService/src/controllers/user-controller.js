const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a user',
            data: response,
            err: {}
        });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            err : error,
            data : {},
            success: false
        })
    }
}

const destroy = async (req, res) => {
    try {
        const user = await userService.destroy(req.params.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully deleted a user',
            data: user,
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            err : error,
            data : {},
            success: false
        })
    }
}

const getById = async (req, res) => {
    try {
        const userDetails = await userService.getById(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched user Details',
            data: userDetails,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            err : error,
            data : {},
            success: false
        })
    }
}



module.exports = {
    create,
    destroy,
    getById
}
