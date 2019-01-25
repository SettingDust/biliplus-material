if (loginInfo)
    GM_setValue('user', loginInfo);
const user = GM_getValue('user');

export default {
    user: user || {
        isLogin: false,
        uname: '\u6e38\u5ba2',
        mid: 0,
        level: 0,
        face: 'https:\/\/static.hdslb.com\/images\/member\/noface.gif',
        expires: 0
    },
    config: {
        title: 'BiliPlus'
    },
    api: {
        dynamic: {
            video: '/me/dynamic/page/1/',
            bangumi: '/me/dynamic/page/102/%page%',
            comment: '/me/dynamic/page/101/%page%'
        },
        live: '/me/dynamic/page/100/',
        search: {}
    }
};