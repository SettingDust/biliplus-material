import tpl from '../../../view/index.tpl';

const config = bpVars.config;

export default async () => {
    config.pageTitle = `${bpVars.user.uname} - ${config.title}`;
    document.documentElement.innerHTML = tpl.render(config);
    GM_addStyle((await import('../../../style/style.css')).default.toString());
    return true;
};