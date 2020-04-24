
const {Movie} = require('../models/index')
const MovieController={
    Movies(req,res){
        Movie.findAll()
        .then(movies => res.send(movies))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'Ha habido un problema al cargar las peliculas'})
        })
    },
    Film(req,res){
    Movie.create({...req.body})
    .then(product => res.status(201).send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar las peliculas'})
    })
},
Genre(req,res){
    let genre = req.query.genre;
    Movie.findAll({ where: { genre: genre }}).then( Movie => {
        res.json(Movie);
    })
},
Actor(req,res){
    let actor = req.query.actor;
    Movie.findAll({ where: { actor: actor }}).then( Movie => {
        res.json(Movie);
    })
},
 Id(req, res) {
    let id = req.params.id;
    Movie.findAll({ where: { id: id }}).then( Movie => {
        res.json(Movie);
    });
}
};
module.exports=MovieController;