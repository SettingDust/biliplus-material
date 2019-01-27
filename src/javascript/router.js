import Router from './util/router';
import Route from './util/route';
import url from 'url';

const router = new Router();

const hrefObj = url.parse(location.href), href = `${hrefObj.host}${hrefObj.pathname}`;

export default async () => {
    bpLogger.debug(href);
    //Index
    router.push(new Route('$', import('./routes/index')));
    router.push(new Route('index.php$', import('./routes/index')));
    //Video
    router.push(new Route('av\\d+', import('./routes/video/redirect')));
    // router.push(new Route('video/av\d+$', syncImport('./routes/video')));
    //Whitelist
    router.push(new Route('[api|me]'));
    router.push(new Route('.*'));

    router.load(href);
};