const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error {
    constructor(error) {
        super();

        let explaination = [];
        
        error.errors.forEach((err)=>{
            explaination.push(err.message);
        })
        this.name = 'ValidationError';
        this.message = 'Not able to validate the data sent in request';
        this.explaination = explaination;
        this.statusCode = statusCode; 
    }
}


module.exports = ValidationError;