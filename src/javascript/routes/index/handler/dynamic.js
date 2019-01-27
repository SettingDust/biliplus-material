import card from '../../../../view/include/card/dynamic.tpl';
import largeImage from '../../../../view/include/photo-swipe.tpl';
import Scrollbar from 'smooth-scrollbar';
import moment from 'moment';
import { throttle, debounce } from 'throttle-debounce';

const api = bpVars.api.dynamic.blog;
let lastBlog = 0;
let isLoading = false;

function getBlogs() {
    return new Promise((resolve, reject) => {
        $.get({
            url: api.replace('%offset%', lastBlog),
            success: (data) => {
                if (data.code === 0) {
                    resolve(data.data);
                } else
                    reject(data);
            },
            error: (data) => {
                reject(data);
            }
        });
    });
}

function translateWrap(s) {
    return s.split(/\n+/g);
}

export default async () => {
    const $dynamic = $('#dynamic .card-list');
    let scrollbar;

    function appendBlogs(blogs) {
        for (const blog of blogs) {
            blog.create = moment(blog.desc.timestamp * 1e3).calendar();
            blog.card = JSON.parse(blog.card);
            blog.translateWrap = translateWrap;
            if (scrollbar)
                $(scrollbar.contentEl).append(card.render(blog));
            else
                $dynamic.append(card.render(blog));
            lastBlog = blog.desc.dynamic_id_str;
        }
        isLoading = false;
    }

    async function appendNextBlogs() {
        isLoading = true;
        appendBlogs((await getBlogs()).cards);
    }

    await appendNextBlogs();
    scrollbar = Scrollbar.init($dynamic.get(0));
    scrollbar.addListener(debounce(200, async (status) => {
        if (status.limit.y - ($(window).width() > 2 ^ 10 ? 1e3 : 5e2) <= status.offset.y
            && !isLoading) {
            await appendNextBlogs();
        }
    }));

    scrollbar.addListener(throttle(50, (status) => {
        if (status.offset.y > 0) {
            $('#dynamic header').addClass('on');
        } else {
            $('#dynamic header').removeClass('on');
        }
    }));

    $(() => {
        const $dynamic = $('#dynamic');
        $dynamic.find('.top').click(() => {
            scrollbar.scrollTo(0, 0, 500);
        });

        $('body').on('click', '#dynamic .picture', function() {
            $('#pswp').remove();
            $('#main').append(largeImage.render());
            const $pictures = $(this).siblings('.picture').addBack();
            const pictures = $pictures.map((_, e) => {
                const image = new Image();
                const src = $(e).find('img').attr('src');
                image.src = src;
                return {
                    src,
                    w: image.width,
                    h: image.height
                };
            }).get();
            const options = {
                index: $pictures.index($(this))
            };
            const gallery = new PhotoSwipe($('#pswp').get(0), PhotoSwipeUI_Default, pictures, options);
            gallery.init();
        });
    });
}