//this Service layer has the buisness logic
const UserRepository = require('../repository/user-repository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async destroy(id) {
        try {
            const user = await this.userRepository.destroy(id);
            return user;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async getById (userId) {
        try {
            const user = await this.userRepository.getById(userId);
            return user;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
}

module.exports = UserService;