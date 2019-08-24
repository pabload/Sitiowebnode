const express = require("express");
const path = require("path");
const app = express();
//configuraciones
app.set("port",4000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//middleware
//archivos estaticos
app.use(express.static(path.join(__dirname,"public")));
//rutas
app.use(require("./routes/index.js"));
//archivos estaticos
//escuchando al servidor
app.listen(app.get("port"),function(){ 
    console.log("Servidor en puerto "+app.get("port"));
});

