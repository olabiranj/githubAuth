A Github Authentication app made with react. It serves as a guide for react developers who intends integrating react with OAuth provided by github.

### Live

https://gituth.herokuapp.com/

### Usage and Setup

- Clone this repo. Go into the root folder and run `npm install` to install all necessary dependencies.
- Create a .env file in the root folder of this project.
- Go to login to your github account, navigate to Settings > Developer Settings > OAuth Apps.
- Create a new OAuth App and get a free client secret and client ID.
- Set the credentials you got as REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET and the REACT_APP_REDIRECT_URI you filled while creating the OAuth in the env file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### Credit

Auth provided by Github

### Like this project?

Don't forget to star :star2: this repo.

### Want to contribute or need to see some improvements?

I would love that, please create an issue or send a PR.
