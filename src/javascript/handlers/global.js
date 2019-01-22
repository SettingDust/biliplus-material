export default async (ctx) => {
    // Init global vars
    window.bpLogger = await import ('../util/logger');
    window.prototype = await import ('../util/utils');
    window.bpVars = await import ('../util/vars');

    document.documentElement.lang = 'zh-cmn-Hans';
}