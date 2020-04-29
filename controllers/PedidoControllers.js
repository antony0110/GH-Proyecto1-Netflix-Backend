const {Pedido,User,Movie} = require('../models/index')
const PedidoController={
    pedido(req,res){
        Pedido.create({...req.body})
        .then(Pedido => res.status(201).send(Pedido))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'Ha habido un problema al cargar los productos'})
        })
},
pedidos(req,res){
    Pedido.findAll({
        include:[User,Movie]
    })
    .then(Pedido => res.send(Pedido))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
}
};
module.exports=PedidoController;