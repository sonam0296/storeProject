const express = require("express");
const dotEnv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
dotEnv.config()
require('./db/config')

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan());

// route imports
const userRoutes = require('./routes/userRoutes');

// routes
app.use('/api/v1/users', userRoutes)

// PORT 
const PORT = process.env.PORT || 4002

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})