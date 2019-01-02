const Router = require('./util/router'),
    logger = require('./util/logger'),
    Route = require('./util/route'),
    router = new Router(),
    url = require('url');

const hrefObj = url.parse(location.href), href = `${hrefObj.host}${hrefObj.pathname}`;
module.exports = async () => {
    logger.debug(href);
    //Index
    router.push(new Route('$', require('./routes/index')));
    //Video
    // router.push(new Route('av\d+$', require('./routes/video')));
    // router.push(new Route('video/av\d+$', require('./routes/video')));
    //Whitelist
    router.push(new Route('[api|me]'));
    router.push(new Route('.*', require('./routes/error')));

    router.load(href);
};