const Router = require('./util/router'),
    logger = require('./util/logger'),
    Route = require('./util/route'),
    router = new Router(),
    utils = require('./util/utils'),
    url = require('url'),
    vars = require('./util/vars');

const hrefObj = url.parse(location.href);
const href = `${hrefObj.host}${hrefObj.pathname}`;

document.documentElement.lang = 'zh-cmn-Hans';
$(() => {
    logger.debug(vars);

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

    const $avatar = $('#avatar');
    $avatar.children().css('background-image', `url(${vars.user.face})`);
});

router.push(new Route('$', require('./routes/index')));
//Whitelist
router.push(new Route('[api|me]'));
router.push(new Route('.*', require('./routes/error')));

router.load(href);

logger.debug(href);
