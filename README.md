# JWT Authentication and Role-Based Access Control (RBAC)

## Project Overview

This project is a backend application built using Node.js, Express.js, MongoDB, and Mongoose. It implements JWT (JSON Web Token) based authentication and Role-Based Access Control (RBAC) to provide secure access to different APIs based on user roles.

The application supports three roles:
- Admin
- Manager
- User

Each role has different permissions and can only access the APIs assigned to them.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS
- Nodemon
- Postman

---

## Features

### Authentication

- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Get Current Logged-in User

### Role-Based Access Control

- Authentication Middleware
- Authorization Middleware
- Role Verification

### Admin Features

- View All Users
- Update User Role
- Delete User

### Manager Features

- View All Users
- View Dashboard Statistics

### User Features

- View Profile
- Update Profile

### Database

- MongoDB Connection
- User Schema with Roles
- Password Hashing using bcrypt
- Automatic CreatedAt and UpdatedAt timestamps

---

## Project Structure

```
jwt-rbac-backend
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── seed
├── .env
├── package.json
└── server.js
```

---

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

### Admin

- GET /api/admin/users
- PUT /api/admin/users/:id/role
- DELETE /api/admin/users/:id

### Manager

- GET /api/manager/users
- GET /api/manager/dashboard

### User

- GET /api/user/profile
- PUT /api/user/profile

---

## Concepts Covered

- Backend Development using Express.js
- REST API Development
- MongoDB Database Integration
- Mongoose Models and Schemas
- Password Hashing using bcrypt
- JWT Authentication
- Authentication Middleware
- Authorization Middleware
- Role-Based Access Control (RBAC)
- Environment Variables using dotenv
- CRUD Operations
- HTTP Status Codes
- Protected Routes
- Seed Data
- API Testing using Postman



## Testing

All APIs were tested using Postman, including both successful and failed scenarios such as invalid login, unauthorized access, missing token, and insufficient permissions.


