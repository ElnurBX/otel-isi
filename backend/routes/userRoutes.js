const express = require('express');
const { registerUser, loginUser, getAllUsers, deleteUser, verifyToken } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.post('/verifyToken', verifyToken);

module.exports = router;
