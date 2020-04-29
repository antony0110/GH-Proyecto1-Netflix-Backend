const router = require('express').Router();
const PedidoController = require('../controllers/PedidoControllers');

router.post('/Pedido',PedidoController.pedido);
router.get('/Compras',PedidoController.pedidos);




module.exports=router;