# Messages of Hope Website

## Project Structure

This structure is comprised of two main programs, the full stack web application used to run the publicly facing Messages of Hope website, and an API used to provide access to the backend data base. The web application using the full stack framework NextJS, supported through a Python based API service using Flask.

- The *web-app/* directory holds the NextJS web application.
- The *api/* directory holds the Flask API.


## Web Application

The source code for the web application is held in the *web-app/* directory. This application makes use of NextJS to provide a fullstack structure at which to host the site. The project uses JavaScript and with CSS modules to style the components.

The fonts of this project are stored locally in the *fonts/*, which stores the required pre-selected fonts. The colour palette is held in the *global.css* file in the *app/* directory. The designs for the specific pages are held in individual issues, with the larger designs being created on Figma.


## API Application

This project is privately hosted existing at [https://api.messagesofhope.co.uk](https://api.messagesofhope.co.uk). The server hosting the API using an NGINX configuration to route requests to the API, preventing requests from being made except from the Messages of Hope web application. The source code for the API is held in the *api/* directory.

The Messages of Hope API is a Flask based API service. The API is designed to be used in conjunction with the Messages of Hope web application and not intended to be used as a standalone service. The Messages of Hope API stores data in a PostgreSQL database hosted using Digital Ocean's managed database service.

### API Endpoints

- GET `/messages` - Returns 10 messages from the messages database. These messages are selected at random from the database and require the messages to be pre-approved.
- GET `/message` - Returns a single message from the messages database. This message is selected at random from the database and requires the message to be pre-approved.
