export default async (ctx) => {
    $(() => {
        const $main = $('main');
        $main.on('scroll', () => {
            bpThrottle(() => {
                if ($main.scrollTop() > 0) {
                    $('#header').addClass('on');
                } else {
                    $('#header').removeClass('on');
                }
            }, 400);
        });

        const $avatar = $('#avatar');
        $avatar.children().css('background-image', `url(${bpVars.user.face})`);

        // TODO 加搜索焦点效果、清空按钮
        const $search = $('#header-search');
        const $search_input = $search.find('input');
        $search.keyup((e) => {
            const search_text = $search_input.val();
            if (e.which === 13
                && search_text.length > 0) {
                utils.search(search_text);
            }
        });
    });
};