const Employee = require('../models/employee');
//es un ojeto  que sera exportado 
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    // //callback
    // Employee.find(function(employees, err){
    // });
    // //promesas
    // Employee.find()
    //     .then(employees => console.log("success"))
    //     .catch(err => console.error(err))
   //async await es una nueva forma de java script para esperar respuestas y al iniciar se pone async dentro de ella await
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
    
    //esta es la que hise
    delete req.body._id;
    const employee = new Employee(req.body);
    //esta forma es la que esta definida en el video
    // const employee = new Employee({
    //     name: req.body.name,
    //     position: req.body.position,
    //     office: req.body.office,
    //     salary: req.body.salary
    // });
    await employee.save();
    
    console.log(employee)
    if(employee)
        res.json({"status": 'Employee created'});
    else
        res.json({"status": "error"})
};

employeeCtrl.getEmployee = async (req, res, next) => {
    console.log(req.params)
    const { id } = req.params;
    console.log(req.params.id)//obtenemos solo el id
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});//busca y actualiza pasandole los parametros id y datos
    res.json({status: 'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;