const path = require('path');

let mainController ={
    home: function (req,res){
        res.sendFile(path.resolve('./views/home.html'));
    },
    about: function(req,res){
        res.sendFile(path.resolve('./views/about.html'));
    }
}

module.exports = mainController;