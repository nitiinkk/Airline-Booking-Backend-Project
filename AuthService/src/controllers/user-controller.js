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
         return res.status(error.statusCode).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        });
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

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password)
        return res.status(200).json({
            success: true,
            message: 'Successfully generated the token',
            data: response,
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

const isAuthenciated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = userService.isAuthenicated(token);
        return res.status(200).json({
            success: true,
            message: 'User is authenciated and token is valid',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong while authenciating the request',
            err : error,
            data : {},
            success: false
        })
    }
}

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully matched user admin or not',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong while checking is user Admin role',
            err : error,
            data : {},
            success: false
        })
    }
}

module.exports = {
    create,
    destroy,
    getById,
    signIn,
    isAuthenciated,
    isAdmin
}
