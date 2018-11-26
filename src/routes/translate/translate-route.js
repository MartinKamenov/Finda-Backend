const { Router } = require('express');
const controller = require('./translate-controller');

const attach = (app) => {
    const router = new Router();
    router.post('/', async (req, res) => {
        const body = req.body;
        if(!body.to) {
            res.send('No "to" param');
        }

        const translateBody = controller.parseParams(body);
        const result = await controller.translate(translateBody);

        res.send(result);
    });

    app.use('/translate', router);
}

module.exports = attach;