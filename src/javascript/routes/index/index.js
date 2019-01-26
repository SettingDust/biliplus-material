import tpl from '../../../view/index.tpl';

const config = bpVars.config;
const handlers = [
    import ('./handler/feed'),
    import ('./handler/post'),
    import ('./handler/dynamic')
];

export default async () => {
    config.pageTitle = `${bpVars.user.uname} - ${config.title}`;
    document.documentElement.innerHTML = tpl.render(config);
    GM_addStyle((await import('../../../style/style.css')).default.toString());
    GM_addStyle((await import('../../../style/index.css')).default.toString());

    Promise.all(handlers).then(async (e) => {
        for (const fn of e)
            fn.default();
    });

    return true;
};