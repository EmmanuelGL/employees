var express = require('express');
var router = express.Router();


const controllers = require('../controllers')
//const controllers = require('../controllers/index')


/* GET users listing. */
// router.get('/',controllers.getPrueba);
// router.get('/', controllers.homecontroller.getPrueba);


router.get('/', controllers.employee.getEmployees);
router.post('/', controllers.employee.createEmployee);
router.get('/:id', controllers.employee.getEmployee);
router.put('/:id', controllers.employee.editEmployee);
router.delete('/:id', controllers.employee.deleteEmployee);

module.exports = router;
