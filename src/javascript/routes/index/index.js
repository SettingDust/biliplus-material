const logger = require('../../util/logger');
module.exports = async () => {
    const tpl = require('../../../view/index.tpl');
    document.documentElement.innerHTML = tpl.render({ title: 'BiliPlus' });
    GM_addStyle(require('../../../style/style.css').toString());
};