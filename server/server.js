const express = require("express")
const dotEnv = require('dotenv')
// require('dotenv/config')
const app = express();
dotEnv.config()
require('./db/config')

// middleware
app.use(express.json())


// PORT 
const PORT = process.env.PORT || 4002

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})