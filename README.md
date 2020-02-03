I started this project to learn React.

# Power list

The main goal of the power list is to help people achieve their goals, by creating
a daily list of actions.
Doing a little bit of work everything day, to learn to win, and build the
necessary habits to succeed.
The work comes before the belief.

Every single day, the user puts maximum 5 critical tasks he needs to do.
The user can add more tasks but they will be considered as optional.
The user can add tasks to a backlog.
Some of the tasks can be repeated over the days to create a habit.

If all the tasks of day are completed, then the day is marked by a W (Win), else
it's an L (take that L loser).


* Tasks
  * task not goal
  * 0 task set => L
  * 5 max critical
    * all done => W
    * not all done => L
  * all others are optional => extra points
  * Can be repeated (habit)
  * Set a time
  * All tasks not done are put into the backlog

A task is "completed" if done or time is up. (ex: do 1 hour of something)
i
## useful stuff

* [How To Make create-react-app work with a Node Back-end API](https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/)
* [Web browser is a pepega cause proxy is working](https://github.com/facebook/create-react-app/issues/1219#issuecomment-400515247)
* [thing to build database diagrams](https://dbdiagram.io/d)

### SQL conventions

Let define SQL naming conventions and stick to them.

* no upper case to prevent case problems with postgres
* Table names are plural (ex: `tasks`)
* column names are singular, underscore only (ex: `date_of_birth`)
* Foreign key column: `name_foreign_key__name_primary_key` (ex: `type__id`)
* Foreign key constraints: `fk__foreign_key_table__primary_key_table` (2 underscores)
* enums: `name_enum`

## Tech

* React
* [material-ui](https://material-ui.com)
* [favicon](https://icons8.com/icon/52550/lightning-bolt)
* postgres 11
* node 

----------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
