const express = require('express'); // Gives access to the express library by searching your node_modules for "express"
const app = express(); // Creates an instance of the express constructor, which we will name "app"


// The app.listen method will start up the server locally on the port 8000
app.listen(8000,function(){
  console.log("server is running")
})
