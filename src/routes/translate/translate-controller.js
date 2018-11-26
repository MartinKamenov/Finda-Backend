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
    translate: async(body) => {
        const res = await translate(body.text, { from: body.from, to: body.to });
        return res.text;
    }
};

module.exports = controller;