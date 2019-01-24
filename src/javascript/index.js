import router from './router';

const handlers = [
    import ('./handlers/global'),
    import ('./handlers/header')
];

Promise.all(handlers).then(async (e) => {
    for (const fn of e)
        await fn.default();
    router();
});