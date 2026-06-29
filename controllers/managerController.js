const User = require("../models/User");

exports.viewAllUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json({
    message: "Users fetched successfully",
    users
  });
};

exports.dashboardStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const admins = await User.countDocuments({ role: "admin" });
  const managers = await User.countDocuments({ role: "manager" });
  const users = await User.countDocuments({ role: "user" });

  res.status(200).json({
    message: "Dashboard statistics fetched successfully",
    stats: {
      totalUsers,
      admins,
      managers,
      users
    }
  });
};