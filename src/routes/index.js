const express = require("express");
const router = express.Router();
//rutas
router.get("/",function(req,res){
    //res.sendFile(path.join(__dirname,"/views/index.html"));
    res.render("index.ejs",{ title:"sitio"});
    console.log(__dirname);
});
router.get("/contact",function(req,res){
    //res.sendFile(path.join(__dirname,"/views/index.html"));
    res.render("contact.ejs",{ title:"contact page"});
    console.log(__dirname);
});
module.exports =router;