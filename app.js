const express = require ( 'express' );
const path = require('path');
const app = express ();
const rutasMain = require("./routers/main")

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.use("/", rutasMain);

app.listen ( 3004 , () => {
    console.log( 'Servidor funcionando en el puerto 3004' );
});



