const logger = require('./util/logger'),
    utils = require('./util/utils'),
    vars = require('./util/vars'),
    router = require('./router');

router();

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


    // TODO 加搜索焦点效果、清空按钮
    const $search = $('#header-search');
    const $search_input = $search.find('input');
    const search_text = $search_input.text();
    $search.keyup((e) => {
        if (e.which === 13
            && search_text.length > 0) {
            utils.search(search_text);
        }
    });
});
