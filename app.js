const express = require ( 'express' );
const path = require('path');
const app = express ();

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app . listen ( 3004 , () => {
    console.log( 'Servidor funcionando en el puerto 3004' );
});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});


app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/about.html'));
});