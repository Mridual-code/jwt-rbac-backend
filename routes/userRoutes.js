const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  viewProfile,
  updateProfile
} = require("../controllers/userController");

router.get("/profile", protect, authorizeRoles("admin", "manager", "user"), viewProfile);
router.put("/profile", protect, authorizeRoles("admin", "manager", "user"), updateProfile);

module.exports = router;