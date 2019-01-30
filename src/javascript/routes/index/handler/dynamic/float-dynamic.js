import Scrollbar from 'smooth-scrollbar';
import { throttle } from 'throttle-debounce';

export default async () => {
    const $body = $('body');
    const floatDynamic = $('#float-dynamic');
    floatDynamic.animate({
        opacity: 1
    }, 225);

    const scrollbar = Scrollbar.init(floatDynamic.find('.content').get(0));
    $body.one('click', '#float-dynamic .mask', () => {
        scrollbar.destroy();
        floatDynamic.fadeOut(225, () => floatDynamic.remove());
    });

    scrollbar.addListener(throttle(50, (status) => {
        const $header = floatDynamic.find('header');
        if (status.offset.y > 0) {
            $header.addClass('on');
        } else {
            $header.removeClass('on');
        }
    }));
}