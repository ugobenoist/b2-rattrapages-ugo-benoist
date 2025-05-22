const {Restaurant} = require('../models/restaurant');

exports.create = async (req, res) => {
    res.json(await Restaurant.create(req.body));
};

exports.read = async (req, res) => {
    res.json(await Restaurant.findAll());
};
  

exports.update = async (req, res) => {
    await Restaurant.update(req.body, { where: { id: req.params.id } });
};
  
exports.delete = async (req, res) => {
    await Restaurant.destroy({ where: { id: req.params.id } });
};