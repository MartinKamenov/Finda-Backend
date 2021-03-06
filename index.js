const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const translateRoute = require('./src/routes/translate/translate-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
translateRoute(app);

const port = process.env.PORT || 5000;
const message = 'Magic is running on ' + port;
app.listen(
    port,
    () => console.log(message)
);