import Scrollbar from 'smooth-scrollbar';
import { throttle } from 'throttle-debounce';

export function loadImage(scrollbar) {
    const $main = $('#main');
    const $scrollbarContent = $(scrollbar.contentEl);
    return () => {
        $scrollbarContent.find('img.lazyload').each(function() {
            const $elem = $(this);
            const $elemTop = $elem.offset().top;
            if (
                $elemTop < $main.outerHeight() * 1.5 &&
                $elemTop > -$elem.outerHeight() - 64
            ) {
                const src = $elem.data('src');
                $elem.attr('src', src);
                $('<img>')
                    .attr('src', src)
                    .on('load', () => {
                        $elem.css('opacity', 1);
                    });
            } else {
                $elem.css('opacity', 0);
            }
        });
    };
}

export default async () => {
    const scrollbars = Scrollbar.getAll();

    for (const scrollbar of scrollbars) {
        (loadImage(scrollbar))();
        scrollbar.addListener(throttle((1000 / 60) * 10, loadImage(scrollbar)));
    }
}