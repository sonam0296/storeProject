const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("DB connected successfully");
}).catch((err)=> {
    console.log("DB not connected", err);
})