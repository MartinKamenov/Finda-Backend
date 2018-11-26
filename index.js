const express = require('express');
const app = express();
const translateRoute = require('./src/routes/translate/translate-route');

translateRoute(app);

const port = process.env.PORT || 5000;
const message = 'Magic is running on ' + port;
app.listen(
    port,
    () => console.log(message)
);