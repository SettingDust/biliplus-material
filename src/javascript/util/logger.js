const monkey = require('../../../monkey.config');
export default {
    info: message => {
        console.info(`[${monkey.header.name}]`, message);
    },
    debug: message => {
        console.debug(`[${monkey.header.name}]`, message);
    },
    warn: message => {
        console.warn(`[${monkey.header.name}]`, message);
    }
};
