const Router = require('./util/router'),
    logger = require('./util/logger'),
    Route = require('./util/route'),
    router = new Router(),
    utils = require('./util/utils'),
    url = require('url');

const hrefObj = url.parse(location.href);
const href = `${hrefObj.host}${hrefObj.pathname}`;

document.documentElement.lang = 'zh-cmn-Hans';
$(() => {
    const $main = $('main');
    $main.on('scroll', () => {
        utils.throttle(() => {
            if ($main.scrollTop() > 0) {
                $('#header').addClass('on');
            } else {
                $('#header').removeClass('on');
            }
        }, 400);
    });
});

router.push(new Route('', require('./routes/index')));

router.load(href);

logger.debug(href);
