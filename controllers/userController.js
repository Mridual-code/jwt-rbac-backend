const User = require("../models/User");

exports.viewProfile = async (req, res) => {
  res.status(200).json({
    message: "Profile fetched successfully",
    user: req.user
  });
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true }
  ).select("-password");

  res.status(200).json({
    message: "Profile updated successfully",
    user
  });
};