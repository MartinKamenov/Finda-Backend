const { Router } = require('express');
const controller = require('./translate-controller');

const attach = (app) => {
    const router = new Router();
    router
    .get('/', (req, res) => {
        res.send('works');
    })
    .post('/', (req, res) => {
        const body = req.body;
        if(!body.from || !body.to) {
            res.send('No "from" or "to" param');
        }

        const parsedBody = controller.parseParams(body);
        controller.translate(parsedBody, res);
    });

    app.use('/translate', router);
}

module.exports = attach;