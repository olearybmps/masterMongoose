const User = require('../models/user');

const fetchAllUsers = async (req, res) => {
    const users = await User.find();
    res.json({ users: users });
};

const createUser = async (req, res) => {
    const { username, email } = req.body;
    const user = await User.create({ username: username, email: email });
    res.json({ user: user });
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    const user = await User.findByIdAndUpdate(userId, {
        username: username,
        email: email,
    });
    const updatedUser = await User.findById(userId);
    res.json({ user: updatedUser });
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    await User.deleteOne({ _id: userId });
    res.json({ success: 'User has been deleted successfully' });
};

module.exports = {
    fetchAllUsers,
    createUser,
    updateUser,
    deleteUser,
};