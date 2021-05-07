let  express = require ('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

router.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/about.html'));
});

module.exports = router;