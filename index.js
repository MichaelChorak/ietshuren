const ejs = require("ejs");
const express = require('express');
const app = express();
const http = require("http").Server(app);
const port = 3000;
const mongoose = require('mongoose');

// Static files
app.use(express.static("public"));
app.use("/css", express.static("/public/style/")); // link naar je css folder
app.use("/js", express.static("/public/scripts")); // link naar je js folder
//setting the template engine
app.set("view engine", "ejs");

//connecting to mongoDB
const {
    MongoClient,
    ObjectID
  } = require("mongodb");
const uri = 'mongodb+srv://huren:ietshuren@cluster0.fiihw.mongodb.net/test?authSource=admin&replicaSet=atlas-r4sakp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const db = new MongoClient(uri, {
  useUnifiedTopology: true
});
db.connect();

// http listen
http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
  
  async function run() {
    try {
      // Connect the client to the server
      await db.connect();
      // Establish and verify connection
      await db.db("huren").command({
        ping: 1
      });
      console.log("Connected succesfully to the database.");
    } finally {
      // Ensures that the client will close when you finish/error
      await db.close();
    }
  }
  run().catch(console.dir);

//end of getting connection and loading packages etc//

// Routes starting here!
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });


