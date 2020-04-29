const router = require('express').Router();
const UserController = require('../controllers/UserControllers');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/Profiles',UserController.Profiles);
router.get('/Profile/:id',UserController.Id)




module.exports=router;