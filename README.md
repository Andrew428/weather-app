# Basic MERN Stack for my-weather-app

### Front-End - React + Redux

### Back-End - Node.js, Express.js & MongoDB

To run it locally -

### Steps to run in development mode:-

1. Fork the repo and clone it.
2. Make sure you have `yarn` Node.js & MongoDB (if using locally) installed in your system.
3. Run (from the root) `yarn install` and `cd client && yarn install`.
4. Add DB credintials in the src/server/config.js file. and the openweathermap API_KEY in src/server/controllers/weather.js file.
5. Open two terminal windows (one for running Server and other for the UI).
6. Start MongoDB service with `sudo service mongod start`. (if using locally) For thisapp mongo DB just stores a session.
7. To Start Server => cd to `server` file and run `yarn start`. By default it will run on `port 5000`.
8. To Start UI => cd to `client` file and run `yarn start` and it will open on a new tab on `port 3000`.

### Note: 
  UI uses proxy to reach server on port 5000



