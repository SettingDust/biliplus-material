const logger = require('./logger');

let loginInfo;
if (loginInfo)
    GM_setValue('user', loginInfo);
const user = GM_getValue('user');

module.exports = {
    user,
    config: {
        title: 'BiliPlus'
    },
    api: {
        dynamic: {
            video: '/me/dynamic/page/1/',
            bangumi: '/me/dynamic/page/102/',
            comment: '/me/dynamic/page/101/'
        }
    }
};