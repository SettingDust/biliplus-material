import router from './router';

const handlerList = [
    import ('./handlers/global'),
    import ('./handlers/header')
];

Promise.all(handlerList).then(async (e) => {
    for (const fn of e)
        await fn.default();
    router();
});
