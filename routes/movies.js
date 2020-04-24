const router = require('express').Router();
const MovieController = require('../controllers/MovieControllers');

router.post('/Film',MovieController.Film);
router.get('/Movies',MovieController.Movies);
router.get('/Genre',MovieController.Genre);
router.get('/Actors',MovieController.Actor);
router.get('/Movies/:id',MovieController.Id)

module.exports=router;