### Booking Service
- Project Repository for Booking Service

### Project Setup
`1. npm i (to install node_modules)`\
`2. run node setup.js to load the .env variables`\
`3. create config.json in /config dir and paste the below config`
```
 {
    "development": {
      "username": "<YOUR_DB_USERNAME>",
      "password": "<YOUR_DB_PASSWORD>",
      "database": "BOOKING_DB_DEV",
      "host": "127.0.0.1",
      "dialect": "mysql" 
    }
  }
  ```

### Other Commands used
`1. npx sequelize init`\
`2. go to src/ and then execute npx sequelize db:create`\
`3. npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`\
`4. npx sequelize db:migrate to migrate the migrations and models in db`\

`5. npx sequelize migration:create --name modify_bookings_add_new_fields :: modifying exisiting migration file for Boking table`\
//we can add the columns using models as well or using migrations as well

### Extra Info
  - Bookings table
 ```
+-----------+----------------------------------------+------+-----+-----------+----------------+
| Field     | Type                                   | Null | Key | Default   | Extra          |
+-----------+----------------------------------------+------+-----+-----------+----------------+
| id        | int                                    | NO   | PRI | NULL      | auto_increment |
| flightId  | int                                    | NO   |     | NULL      |                |
| userId    | int                                    | NO   |     | NULL      |                |
| status    | enum('InProcess','Booked','Cancelled') | NO   |     | InProcess |                |
| createdAt | datetime                               | NO   |     | NULL      |                |
| updatedAt | datetime                               | NO   |     | NULL      |                |
| noOfSeats | int                                    | NO   |     | 1         |                |
| totalCost | int                                    | NO   |     | 0         |                |
+-----------+----------------------------------------+------+-----+-----------+----------------+
```