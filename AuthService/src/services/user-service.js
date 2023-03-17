//this Service layer has the buisness logic
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user-repository');

const { JWT_KEY } = require('../config/serverConfig');
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw error;
            }
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

    async signIn (email, plainPassword) {
        try {
            //fetch user using the Email
            const user = await this.userRepository.getByEmail(email);
            
            //if password match to what we get in req.body and in db then generate new Token
            const passwordsMatch = this.checkPassword(plainPassword, user.password);

            if (!passwordsMatch) {
                console.log("password doesn't match");
                throw {error : 'Incorrect password'};
            }

            const newJWT = this.createToken({email : user.email, id: user.id});
            return newJWT;

        } catch (error) {
            console.log('error while signin in for user');
            throw {error};
        }
    }

    createToken (user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn : '1h'});
            return result;
        } catch (error) {
            console.log('Something went wrong in token creation');
            throw {error};
        }
    }

    verifyToken (token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log('Something went wrong in token validation', error);
            throw {error};
        }
    }

    checkPassword (inputPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(inputPassword, encryptedPassword);
        } catch (error) {
            console.log('Something went wrong in comparing password', error);
            throw {error};
        }
    }

    async isAuthenicated (token) {
        try {
            // we are verifiying token first, & if token exist check if user still in db
            // {email , id, iat, expiresIn} => response
            const response = this.verifyToken(token);
            if(!response) {
                throw {error : 'Invalid Token'};
            }

            const user = await this.userRepository.getById(response.id);
            if(!user) {
                throw {error : 'No user with corresponding token exist'};
            }
            return user.id;  
        } catch (error) {
            console.log('Something went wrong in authenciating the request', error);
            throw {error};
        }
    }

    async isAdmin (userId) {
        try {
            const user =  this.userRepository.isAdmin(userId);
            return user;
        } catch (error) {
            console.log('Something went wrong in service layer while checking isAdmin', error);
            throw {error};
        }
    }
}

module.exports = UserService;