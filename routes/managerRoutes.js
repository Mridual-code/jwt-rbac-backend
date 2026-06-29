const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  viewAllUsers,
  dashboardStats
} = require("../controllers/managerController");

router.get("/users", protect, authorizeRoles("admin", "manager"), viewAllUsers);
router.get("/dashboard", protect, authorizeRoles("admin", "manager"), dashboardStats);

module.exports = router;