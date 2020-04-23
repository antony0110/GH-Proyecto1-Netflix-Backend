const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/users')
const movieRoutes = require('./routes/movies')


app.use(express.json());
app.use('/users',userRoutes);
app.use('/movie',movieRoutes);

app.listen(PORT,()=> console.log('server running on port' + PORT));