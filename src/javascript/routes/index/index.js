const logger = require('../../util/logger');
const vars = require('../../util/vars');
const config = vars.config;
module.exports = async () => {
    const tpl = require('../../../view/index.tpl');
    config.pageTitle = `${vars.user.uname} - ${config.title}`;
    document.documentElement.innerHTML = tpl.render(config);
    GM_addStyle(require('../../../style/style.css').toString());
};