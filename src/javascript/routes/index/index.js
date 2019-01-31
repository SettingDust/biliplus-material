import tpl from '../../../view/index.tpl';
import lazyLoad from './handler/lazyload';

const config = bpVars.config;
const handlers = [
    import ('./handler/feed'),
    import ('./handler/post'),
    import ('./handler/dynamic/dynamic')
];

export default async () => {
    config.pageTitle = `${bpVars.user.uname} - ${config.title}`;
    document.documentElement.innerHTML = tpl.render(config);
    GM_addStyle((await import('../../../style/style.css')).default.toString());
    GM_addStyle((await import('../../../style/index.css')).default.toString());

    const handleHandlers = (e) => {
        Promise.all(e.map((fn, _) => {
            return fn.default();
        })).then(() => {
            lazyLoad();
        });
    };

    Promise.all(handlers).then(handleHandlers);

    return true;
};