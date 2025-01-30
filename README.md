# Task Management API

## Overview
This is a RESTful API for a Task Management System built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks with JWT-based authentication.

## Features
- User authentication with JWT
- CRUD operations for tasks
- Data validation and error handling
- Secure API endpoints
- Unit testing support

## File Structure
```
- server.js
- config/db.js
- models/Task.js
- middleware/auth.js
- routes/taskRoutes.js
- .env
- package.json
```

## Installation



1. Install dependencies:
   ```sh
   npm install
   ```

2. Set up environment variables:
   Create a `.env` file and add:
   ```sh
   MONGO_URI=
JWT_SECRET=your_secret_key 
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication (JWT required for all endpoints)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks/` | Create a new task |
| GET  | `/tasks/` | Get all tasks |
| GET  | `/tasks/:id` | Get a task by ID |
| PUT  | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Usage
- Use a tool like Postman to test API requests.
- Provide the JWT token in the `Authorization` header as `Bearer <token>`.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- cors



