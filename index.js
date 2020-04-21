const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/users')

app.use(express.json());
app.use('/users',userRoutes);

app.listen(PORT,()=> console.log('server running on port' + PORT));