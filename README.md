# ReactJS Competition App 

Frontend written in ReactJS for a competition app, allowing users to participate by adding submissions.
# Backend of the app on Express/Node.js [in a separate repository on GitHub](https://github.com/misha-l/softuni-react-project-server).

## Live demo with MongoDB Atlas on Heroku [reactjs-competition-app.herokuapp.com](https://reactjs-competition-app.herokuapp.com/).

## How to run in local environment:
* Clone [frontend](https://github.com/misha-l/competition-app) and [backend](https://github.com/misha-l/softuni-react-project-server) repositories from GitHub.
* Install MongoDB [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
* Navigate to backend directory and run `npm install`, `npm run seed` (optional database seed) and `npm run start`
* Navigate to frontend directory and run `npm install` and `npm run start`
* Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

# App functionality

The app allows users to participate in a competition by adding up to 6 submissions. 
A voting system based on likes is available to rank the competition participants.

The functionality is different for authorized users and unauthorized (guest) users.

Authorized users have access to full CRUD functionality:
* add new submissions;
* view items, already submitted by them (profile page);
* partially edit and delete submitted items;
* vote for submissions by liking them;

Authorized users can only view the list of submissions and submission details.
To vote and participate, they need to login/register first.

## Tech stack:
![MERN](https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/320px-MERN-logo.png "Mongo DB, Express JS, React JS, Node JS")

* Fully responsive web app :heavy_check_mark:
* Error handling and data validation :heavy_check_mark:
* Use a state management solution (Redux) :heavy_check_mark: for authentication only

## Available Scripts

In the frontend project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
