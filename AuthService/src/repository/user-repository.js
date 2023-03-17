const {User, Role} = require('../models/index');
const ValidationError = require('../utils/validation-error');
class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            console.log(`error occurred in user-repo layer`);
            throw error;
        }
    }

    async destroy(userId) {
        try {
            const user = await User.destroy({
                where : {
                    id : userId
                }
            });
            return true;
        } catch (error) {
            console.log(`error occurred in user-repo layer`);
            throw error;
        }
    }

    //Specifying attributes for SELECT queries
    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log(`error occurred in user-repo layer`);
            throw error;
        }
    }

    async getByEmail (userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    email : userEmail
                }
            })
            return user;
        } catch (error) {
            console.log('Error getting userData by Email');
            throw {error};
        }
    }

    async isAdmin (userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where : {
                    name : 'ADMIN'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log('Error verifying isAdmin Details for user');
            throw {error};
        }
    }
}

module.exports = UserRepository;