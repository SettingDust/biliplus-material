const logger = require('../../util/logger');
module.exports = async () => {
    $(() => {
        const tpl = require('../../../view/index.tpl');
        document.documentElement.lang = 'zh-cmn-Hans';
        document.documentElement.innerHTML = tpl.render({ title: 'BiliPlus' });
        GM_addStyle(require('../../../style/style.css').toString());
        logger.debug(tpl.render({ title: 'BiliPlus' }));
    });
};