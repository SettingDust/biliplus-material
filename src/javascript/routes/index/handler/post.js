import card from '../../../../view/include/card/video.tpl';
import Scrollbar from 'smooth-scrollbar';
import moment from 'moment';
import { throttle, debounce } from 'throttle-debounce';

const api = bpVars.api.dynamic.post;
let currentPage = 1;
let isLoading = false;

function getPosts(page) {
    return new Promise((resolve, reject) => {
        $.get({
            url: api.replace('%page%', page),
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

export default async () => {
    const $post = $('#post .card-list');
    let scrollbar;

    function appendPosts(posts) {
        for (const post of posts) {
            post.create = moment(post.ctime * 1e3).calendar();
            if (scrollbar)
                $(scrollbar.contentEl).append(card.render(post));
            else
                $post.append(card.render(post));
        }
        isLoading = false;
    }

    async function appendNextPosts() {
        isLoading = true;
        appendPosts((await getPosts(currentPage++)).item);
    }

    await appendNextPosts();
    scrollbar = Scrollbar.init($post.get(0));
    scrollbar.addListener(debounce(200, async (status) => {
        if (status.limit.y - ($(window).width() > 2 ^ 10 ? 1e3 : 5e2) <= status.offset.y
            && !isLoading) {
            await appendNextPosts();
        }
    }));
    scrollbar.addListener(throttle(50, (status) => {
        if (status.offset.y > 0) {
            $('#post header').addClass('on');
        } else {
            $('#post header').removeClass('on');
        }
    }));
    $(() => {
        $('#post .top').click(() => {
            scrollbar.scrollTo(0, 0, 500);
        });
    });
}