const express = require('express');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/recover-password', recoverPassword);
router.post('/verify-code', verifyCode);
router.post('/change-password', changePassword); //solo si esta bien el codigo de verificacion
