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
        const from = body.from;
        const to = body.to;
        const translationText = body.text;
        translate(translationText, { from, to }).then((result) => {
            res.send(result.text);
            return;
        }).catch(er => {
            res.send(er);
            return;
        });
    }
};

module.exports = controller;