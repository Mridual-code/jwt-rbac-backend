const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json({
    message: "All users fetched successfully",
    users
  });
};

exports.updateUserRole = async (req, res) => {
  const { role } = req.body;

  if (!["admin", "manager", "user"].includes(role)) {
    return res.status(400).json({
      message: "Invalid role"
    });
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  ).select("-password");

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json({
    message: "User role updated successfully",
    user
  });
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json({
    message: "User deleted successfully"
  });
};