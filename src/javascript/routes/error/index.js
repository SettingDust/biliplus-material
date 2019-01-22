const config = bpVars.config;
module.exports = async () => {
    const tpl = require('../../../view/error.tpl');
    config.error = {
        code: '404',
        message: 'Not found'
    };
    config.pageTitle = `${config.error.code} ${config.error.message} - ${config.title}`;
    document.documentElement.innerHTML = tpl.render(config);
    GM_addStyle(require('../../../style/style.css').toString());
    GM_addStyle(require('../../../style/error.css').toString());
    // TODO 加焦点效果
    return true;
};