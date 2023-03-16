const {User} = require('../models/index');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
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
}

module.exports = UserRepository;