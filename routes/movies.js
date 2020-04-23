const router = require('express').Router();
const MovieController = require('../controllers/MovieControllers');

router.post('/Film',MovieController.Film);
router.get('/Movies',MovieController.Movies)

module.exports=router;