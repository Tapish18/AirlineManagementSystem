# WELCOME TO THE FLIGHT SERVICE

## Steps to setup Project

- First clone the project in to your local machine.
- Use `npm install` command to download the dependencies
- make a `.env` file to add environment variables and add ther following:

  - PORT=3000

- In src folder make a config.json file and add the following configurations

---

{
"development": {
"username": "<Your_Username>",
"password": "<Your_Password>",
"database": "Flights_Search_DB_LOCAL",
"host": "127.0.0.1",
"dialect": "mysql"
}

}

---

- Navigate to the src folder and run `npx sequelize db:create` in order to create your mysql database.
