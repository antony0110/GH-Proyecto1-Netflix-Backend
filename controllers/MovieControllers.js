
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
}
};
module.exports=MovieController;