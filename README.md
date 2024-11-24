# Bi-Cycle Store B4A2V4 

## Description

 **Bi-Cycle Store** B4A2V4 is a web application designed to provide a seamless experience for browsing, managing, and purchasing bicycles. Whether you're a
 cycling enthusiast, a casual rider, or a store manager, this platform offers intuitive tools and features to cater to all your bicycle-related needs. Built with modern web technologies,
 it ensures fast performance, scalability, and a user-friendly interface. 🚲✨



### Prerequisites

- **Node.js** (v16.x or higher recommended)
- **npm** (v8.x or higher)
- **VS Code** (or any code editor of your choice
- **Express.js**: Server framework for Node.js.
- **TypeScript**: Typed JavaScript for better development experience.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: Manage environment variables.
- **CORS**: Enable Cross-Origin Resource Sharing.


## Installation





### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v16.x or higher recommended)  
  You can download it from [Node.js official website](https://nodejs.org/).
  
- **npm** (v8.x or higher)  
  npm comes bundled with Node.js, so once you install Node.js, npm will be installed automatically.

- **VS Code** (or any code editor of your choice)  
  Download VS Code from [Visual Studio Code official website](https://code.visualstudio.com/).

### Installation Steps

Install Project Dependencies
Install all required npm packages by running the following command:

***npm install***

This will install all the dependencies specified in package.json, including:

Express: Server framework for Node.js.
TypeScript: Superset of JavaScript for type safety.
dotenv: Load environment variables from a .env file.
CORS: Middleware to enable Cross-Origin Resource Sharing (CORS).
Mongoose: ODM library to interact with MongoDB.

### Set Up Environment Variables
Create a .env file in the root directory and define the required environment variables. Example:


**PORT=5000 ,
DATABASE_URL=<your_mongo_db_connection_string>**

### Compile TypeScript Files
If you're using TypeScript, compile the code with the following command:

***npm run build***


# Additional Notes
- **TypeScript**: If you're new to TypeScript, it provides better development support by enforcing strict types. The project is set up to transpile TypeScript code into JavaScript.
- **Mongoose**: Mongoose is used to interact with MongoDB. You need a MongoDB database URL, which you can get by setting up a MongoDB instance (local or hosted via MongoDB Atlas).

