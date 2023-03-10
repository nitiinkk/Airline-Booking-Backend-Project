### Flights and Service
- Project Repository to implement FLights CRUD

### Project Setup
- clone the project to your local
- Execute ```npm install```  to install the npm packages
  #### 2) node setup.js
  - Create .env file and Use this command to setup the env variable in the project repository

  #### 3) setup config.json
  - Inside the src/config create `config.json` and then add the following piece of json
  ```
  {
    "development": {
      "username": "<YOUR_DB_USERNAME",
      "password": "<YOUR_DB_PASSWORD",
      "database": "Flights_Search_DB_Dev",
      "host": "127.0.0.1",
      "dialect": "mysql" 
    }
  }
  ```
  - once you have added the above config , go to src folder and execute `npx sequelize db:create`

### about sequelize
- used `npx sequelize init` command
- This will create following folders
    - config, contains config file, which tells CLI how to connect with database
    - models, contains all models for your project
    - migrations, contains all migration files
    - seeders, contains all seed files

### Folder stucture
- src/
  - index.js
  - config
  - controllers
  - middlewares
  - models
  - repository
  - services
  - utils
- tests