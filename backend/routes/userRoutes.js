const express = require('express');
const { registerUser, loginUser, getAllUsers, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);  

module.exports = router;
