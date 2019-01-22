const config = bpVars.config;
export default async () => {
    const tpl = import('../../../view/index.tpl');
    config.pageTitle = `${bpVars.user.uname} - ${config.title}`;
    document.documentElement.innerHTML = tpl.render(config);
    GM_addStyle(import('../../../style/style.css').toString());
    return true;
};