const express = require("express");
const route = require("./routes/client/index.route.js");
// Database
const database = require("./config/database.js");
database.connect();

require('dotenv').config();
const app = express();
const port = process.env.PORT;



// Pug
app.set("views","./views");
app.set("view engine","pug");

//Routes
route(app);

// Static file
app.use(express.static("public"));

app.listen(port,() =>{
    console.log(`App listening on port ${port}`);
})

