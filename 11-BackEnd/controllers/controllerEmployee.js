const {Employee} = require('../models/employee');

exports.create = async (req, res) => {
    res.json(await Employee.create(req.body));
};

exports.read = async (req, res) => {
    res.json(await Employee.findAll());
};
  

exports.update = async (req, res) => {
    await Employee.update(req.body, { where: { id: req.params.id } });
};
  
exports.delete = async (req, res) => {
    await Employee.destroy({ where: { id: req.params.id } });
};