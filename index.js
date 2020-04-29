const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/users')
const movieRoutes = require('./routes/movies')
const pedidoRoutes= require('./routes/pedidos')


app.use(express.json());
app.use(cors());
app.use('/users',userRoutes);
app.use('/movie',movieRoutes);
app.use('/Pedidos',pedidoRoutes);
app.listen(PORT,()=> console.log('server running on port' + PORT));