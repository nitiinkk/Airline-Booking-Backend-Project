const express = require('express');
const UserController = require('../../controllers/user-controller');

const router = express.Router();
const { AuthRequestValidator } = require('../../middlewares/index');

router.post('/signup', AuthRequestValidator.validateUserAuth, UserController.create);
router.delete('/signup/:id', UserController.destroy);
router.get('/signup/:id', UserController.getById);
router.post('/signin', AuthRequestValidator.validateUserAuth, UserController.signIn);

router.get('/isAuthenciated', UserController.isAuthenciated);

module.exports = router;
