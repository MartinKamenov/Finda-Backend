const translate = require('google-translate-api');

const controller = {
    parseParams: (body) => {
        const translateBody = {
            from: body.from,
            to: body.to,
            text: body.txt
        };
        
        return translateBody;
    },
    translate: (body, res) => {
        translate(body.text, { from: body.from, to: body.to }).then((result) => {
            res.send(result.text);
            return;
        }).catch(er => {
            res.send(er);
            return;
        });
    }
};

module.exports = controller;