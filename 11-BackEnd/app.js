const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');

app.use(bodyParser.json());


const routeRestaurant = require('./routes/restaurants');
const routeEmployee = require('./routes/employees');


app.use('/employees', routeEmployee);
app.use('/restaurants', routeRestaurant);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {});
  });