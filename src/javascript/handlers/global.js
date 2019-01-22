export default async (ctx) => {
    // Init global vars
    window.bpLogger = (await import ('../util/logger')).default;
    window.prototype = (await import ('../util/utils')).default;
    window.bpVars = (await import ('../util/vars')).default;

    document.documentElement.lang = 'zh-cmn-Hans';
}