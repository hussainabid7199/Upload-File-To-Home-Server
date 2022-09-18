const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(upload());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    if(req.files){
        console.log(req.files)
        var file = req.files.file;
        var fileName = file.name;
        console.log(fileName);

        file.mv("D:/" + fileName, function(err){
            if(err){
                res.sendFile(__dirname + "/failed.html")
            }
            else{
                // res.send("File Uploaded Successfully !")
                res.sendFile(__dirname + "/succesfull.html")
            }

        })
    }
})

app.listen(4000, function(){
    console.log("Server started successfully on port 4000.");
})