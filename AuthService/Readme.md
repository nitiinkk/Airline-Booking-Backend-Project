### AuthService
- Project Repository to Authorise

### Project Setup
`1. npm i (to install node_modules)`
`2. run node setup.js to load the .env variables`
`3. create config.json in /config dir and paste the below config`
```
 {
    "development": {
      "username": "<YOUR_DB_USERNAME>",
      "password": "<YOUR_DB_PASSWORD>",
      "database": "AUTH_DB_DEV",
      "host": "127.0.0.1",
      "dialect": "mysql" 
    }
  }
  ```

### Other Commands used
`1. npx sequelize init`
`2. go to src/ and then execute npx sequelize db:create`



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