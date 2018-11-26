const translate = require('google-translate-api');

const controller = {
    parseParams: (body) => {
        const translateBody = {
            from: body.from,
            to: body.to
        };
        
        return translateBody;
    },
    translate: async(body) => {
        const res = await translate('I spea Dutch!', {from: 'en', to: 'nl'});
        return res;
    }
};

module.exports = controller;