const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../models/User");

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();

    const users = [
      {
        name: "Admin User",
        email: "admin@gmail.com",
        password: await bcrypt.hash("admin123", 10),
        role: "admin"
      },
      {
        name: "Manager User",
        email: "manager@gmail.com",
        password: await bcrypt.hash("manager123", 10),
        role: "manager"
      },
      {
        name: "Normal User One",
        email: "user1@gmail.com",
        password: await bcrypt.hash("user123", 10),
        role: "user"
      },
      {
        name: "Normal User Two",
        email: "user2@gmail.com",
        password: await bcrypt.hash("user123", 10),
        role: "user"
      }
    ];

    await User.insertMany(users);

    console.log("Sample users inserted successfully");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedUsers();