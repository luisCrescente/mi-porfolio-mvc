let  express = require ('express');
let mainController = require('../controllers/mainController.js')
let router = express.Router();

router.get('/',mainController.home);
router.get('/about',mainController.about)



module.exports = router;