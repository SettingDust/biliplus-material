import router from './router';

// FIXME 这里没有封装为handlerManager类的原因是Webpack貌似有个坑，import无法使用变量（？）
// TODO 遍历handler文件夹import

const handlers = [
    import ('./handler/global'),
    import ('./handler/header')
];

Promise.all(handlers).then(async (e) => {
    for (const fn of e)
        await fn.default();
    router();
});