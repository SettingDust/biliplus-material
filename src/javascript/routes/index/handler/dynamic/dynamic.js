import card from '../../../../../view/include/card/dynamic.tpl';
import floatCard from '../../../../../view/include/card/float-dynamic.tpl';
import largeImage from '../../../../../view/include/photo-swipe.tpl';
import Scrollbar from 'smooth-scrollbar';
import moment from 'moment';
import floatDynamic from './float-dynamic';
import { throttle, debounce } from 'throttle-debounce';

const api = bpVars.api.dynamic.blog;
let lastBlog = 0;
let isLoading = false;
let data;

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
        const blogs = (await getBlogs()).cards;
        isLoading = true;
        if (!data)
            data = blogs;
        else
            data = data.concat(blogs);
        appendBlogs(blogs);
    }

    await appendNextBlogs();
    scrollbar = Scrollbar.init($dynamic.get(0));
    scrollbar.addListener(debounce(1000 / 60 * 10, async (status) => {
        if (status.limit.y - ($(window).width() > 2 ^ 10 ? 1e3 : 5e2) <= status.offset.y
            && !isLoading) {
            await appendNextBlogs();
        }
    }));

    scrollbar.addListener(throttle(1000 / 60 * 10, (status) => {
        if (status.offset.y > 0) {
            $('#dynamic header').addClass('on');
        } else {
            $('#dynamic header').removeClass('on');
        }
    }));

    $(() => {
        const $dynamic = $('#dynamic');
        const $body = $('body');
        $('#main').append(largeImage.render());
        $dynamic.find('.top').click(() => {
            scrollbar.scrollTo(0, 0, 500);
        });

        $body.on('click', '.dynamic .picture', function() {
            const $pictures = $(this).siblings('.picture').addBack();
            const pictures = $pictures.map((_, e) => {
                const img = $(e).find('img');
                const src = img.attr('src').replace('@450w', '');
                return {
                    src,
                    w: img.data('width'),
                    h: img.data('height')
                };
            }).get();

            const options = {
                index: $(this).index()
            };
            const gallery = new PhotoSwipe($('#pswp').get(0), PhotoSwipeUI_Default, pictures, options);
            gallery.init();
        });

        $body.on('click', '#dynamic .open', function() {
            $('#float-dynamic').remove();
            const $card = $(this).parents('.dynamic');
            const id = $card.data('id');
            let blog;
            for (blog of data) {
                if (blog.desc.dynamic_id_str === id)
                    break;
            }
            $('#main').append(floatCard.render(blog));
            floatDynamic();
        });
    });
}