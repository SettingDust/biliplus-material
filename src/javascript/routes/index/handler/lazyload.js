import Scrollbar from 'smooth-scrollbar';
import { throttle } from 'throttle-debounce';

export default async () => {
    const scrollbars = Scrollbar.getAll();

    function loadImage(scrollbar) {
        const $main = $('#main');
        const $scrollbarContent = $(scrollbar.contentEl);
        return () => {
            $scrollbarContent.find('img.lazyload').each(function() {
                const $elem = $(this);
                const $elemTop = $elem.offset().top;
                if (
                    $elemTop < $main.outerHeight() + $elem.outerHeight() * 2 &&
                    $elemTop > -32
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

    for (const scrollbar of scrollbars) {
        (loadImage(scrollbar))();
        scrollbar.addListener(throttle((1000 / 60) * 10, loadImage(scrollbar)));
    }
}