const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../Middleware/auth');

router.post(
    '/',
    [
        check('email', 'Agregar un email valido').isEmail(),
        check('password', 'La contraseña no puede ir Vacio').not().isEmail(),
    ],
    authController.autenticarUsuario
);

router.get('/', auth, authController.usuarioAutenticado);

module.exports = router;
