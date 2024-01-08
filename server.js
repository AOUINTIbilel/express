const express = require("express");
const logger = require("./middleware/logger")
const app = express();
app.use(logger)
const PORT = 5000 ;
app.listen(PORT , (err)=> 
err? console.log(err):
console.log(`server is running on port ${PORT}`))