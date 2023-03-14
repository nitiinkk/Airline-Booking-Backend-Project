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

### DB Design
- Airplane Table
- Flight
- Airport
- City

  - A flight belong to an airplane but 1 airplane can be used in multiple flights.
  - A city has many airpots but one airport belongs to city.
  - One airport can have many flights, but a flight belongs to one airport.

### about sequelize
- used `npx sequelize init` command
- This will create following folders
    - config, contains config file, which tells CLI how to connect with database
    - models, contains all models for your project
    - migrations, contains all migration files(helps to make incremental changes(add, update, remove) to table)
    - seeders, contains all seed files (used to populate database table with sample or test data)
### Command to generate model
`cd src/` then run command `npx sequelize model:generate --name City --attributes name:String`
`npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`
`npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer`

### Command to apply migration file to db
`cd src ` then `npx sequelize db:migrate`
`npx sequelize db:migrate:undo`
mysql> desc cities;
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| name      | varchar(255) | NO  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

### Command to generate seeders
- `npx sequelize-cli seed:generate --name add-airports` creates a seeder file
- `npx sequelize db:seed:all` to see data into db

### Command to Synchronizing all models at once
`sequelize.sync({alter : true})`

### Tables
City -> id, name, created_at, updated_at
Airport -> id, name, address, city_id, created_at, updated_at
  Relationship : City has many airpot , but Airport belongs to one city (1 : N)

### Folder stucture
- src/
  - index.js
  - config
  - controllers
  - middlewares
  - models
  - repository (right way to interact with models)
  - services
  - utils
- tests