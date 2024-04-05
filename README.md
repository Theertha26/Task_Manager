# Task Manger

The Simple Task Manager project is a web application designed to assist users in organizing and managing their tasks effectively. Built with simplicity and efficiency in mind, this task manager provides essential features for task management while maintaining a user-friendly interface.

## Screenshots



![task1](https://github.com/Theertha26/Task_Manager/assets/106685074/a122ab89-5b26-459e-957b-b03dfa1c68f7)


## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

###Developer-side features

- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Global user state using Redux
- Custom Loaders
- Use of layout component for pages
- Use of theme colors
- Usage of Tooltips
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Use of different HTTP status codes for sending responses

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Node.js
- Express.js
- React
- Redux
- Mongodb

## Dependencies

### Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev-dependencies

### Following are the major dev-dependencies of the project:

- nodemon
- concurrently

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

## Installation and Setup

1.Install all the dependencies

```bash
  npm run install-all
```

2.Add your credentials inside the ".env" file (backend)

3.start the application

```bash
  npm run dev
```

## npm scripts

At root:

`npm run dev` :Starts both backend and frontend

`npm run dev-server`: Starts only backend

`npm run dev-client`: Starts only frontend

Inside frontend folder:

`npm start`: Starts frontend in development mode

Inside backend folder:

`npm run dev`: Starts backend using nodemon.
