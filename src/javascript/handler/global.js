import moment from 'moment';

export default async (ctx) => {
    document.documentElement.lang = 'zh-cmn-Hans';
    moment.locale('zh-cn');

    // Init global vars
    window.bpLogger = (await import ('../util/logger')).default;
    window.__proto__ = (await import ('../util/utils')).default;
    window.bpVars = (await import ('../util/vars')).default;

    $(() => {
        $.ripple('.btn:not(.no-ripple)', {
            multi: true,
            easing: 'ease-in-out'
        });
    });
}