const Router = require('./util/Router'),
    logger = require('./util/Logger'),
    Route = require('./util/route'),
    router = new Router(),
    url = require('url');

const hrefObj = url.parse(location.href);
const href = `${hrefObj.host}${hrefObj.pathname}`;



router.push(new Route('', require('./routes/index')));

router.load(href);

logger.debug(href);
