### Booking Service
- Project Repository for Booking Service

### Project Setup
`1. npm i (to install node_modules)`
`2. run node setup.js to load the .env variables`
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
`1. npx sequelize init`
`2. go to src/ and then execute npx sequelize db:create`
`3. npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`
`4. npx sequelize db:migrate to migrate the migrations and models in db`
`4. npx sequelize model:generate --name Role --attributes name:String`
`5. adding seeders file for roles table :: npx sequelize seed:generate --name add-roles`
`6. npx sequelize db:seed --seed filename`


### Extra Info
#### Types of authenciation
1) Mobile Otp
2) OminAuth - google/github
3) Token Based

```
client                                              server
  | - - - - -  Email, password --- ----- - ---- - >>>> | (check if user with email id present , then compare password )
  | <<<<<<<---  ----- token  --  -----   ---------  -- | ( return token)
  |(save token at frontend) and then use it with other request | (server then verifies the token)

```
- JWT (JSON Web Token) : We use client credentials to generate the token.

- Many to Many associations
  - User can have many roles
  - Roles can have many users
  - So, we create a 3rd Table ie user_roles  (Two tables that have a Many-To-Many relationship require a third table that acts as the junction or join table.)
 ```
+-----------+----------+------+-----+---------+-------+
| Field     | Type     | Null | Key | Default | Extra |
+-----------+----------+------+-----+---------+-------+
| createdAt | datetime | NO   |     | NULL    |       |
| updatedAt | datetime | NO   |     | NULL    |       |
| RoleId    | int      | NO   | PRI | NULL    |       |
| UserId    | int      | NO   | PRI | NULL    |       |
+-----------+----------+------+-----+---------+-------+
```