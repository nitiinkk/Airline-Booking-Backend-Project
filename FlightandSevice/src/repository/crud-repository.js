class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(`Error occurred in crud-repo`);
            throw {error}
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where : {
                    id : modelId
                }
            })
            return true;
        } catch (error) {
            console.log(`Error occurred in crud-repo`);
            throw {error}
        }
    }

    async get(modelId) {
        try {
            const response = await this.model.findByPk(modelId);
            return response;
        } catch (error) {
            console.log(`Error occurred in crud-repo`);
            throw {error}
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log(`Error occurred in crud-repo`);
            throw {error}
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where : {
                    id : modelId
                }
            });
            return result;
        } catch (error) {
            console.log(`Error occurred in crud-repo`);
            throw {error}
        }
    }
}

module.exports = CrudRepository;