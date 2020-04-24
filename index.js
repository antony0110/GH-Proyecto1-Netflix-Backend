const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/users')
const movieRoutes = require('./routes/movies')


app.use(express.json());
app.use(cors());
app.use('/users',userRoutes);
app.use('/movie',movieRoutes);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization ");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.listen(PORT,()=> console.log('server running on port' + PORT));