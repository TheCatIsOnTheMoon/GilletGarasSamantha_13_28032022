# ARGENTBANK - Use an API for a bank user account with React 

> Project 13 of the Front-end OpenClassrooms formation.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup Backend](#setup-backend)
* [Setup Frontend](#setup-frontend)
* [API Documentation](#api-documentation)
* [Project Status](#project-status)


## General Information - Assessed skills
- Implement a state manager in a React application
- Interact with an API
- Model an API
- Authenticate to an API 


## Technologies Used
- React
- Redux


## Features
- The user can visit the homepage
- The user can log into the system
- The user can log out of the system
- The user can only see their own profile information after successfully logging in
- The user can modify the profile and it will keep the data in the database.

## Setup Backend

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

```bash
# go to backend file
cd backend

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you should have two users in your database.


## Setup Frontend

1. Open a terminal window in the cloned project
2. Run the following commands:

```bash
# go to frontend file
cd frontend

# Install dependencies
npm install
```

3. Run the App in the browser by using this command :

```bash
# Start App
npm start
```
4. You can now test fonctionalities with this two user profile :

#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Project Status
Project is: _in progress_.
