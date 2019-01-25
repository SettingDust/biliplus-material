import card from '../../../../view/include/card/feed.tpl';
import Scrollbar from 'smooth-scrollbar';
import { throttle, debounce } from 'throttle-debounce';

const api = bpVars.api.dynamic.bangumi;
let currentPage = 1;
let isLoading = false;

function getFeeds(page) {
    return new Promise((resolve, reject) => {
        $.get({
            url: api.replace('%page%', page),
            success: (data) => {
                if (data.code === 0) {
                    $('#feed-count').text(data.data.page.count);
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
    const $feed = $('#feed .card-list');
    let scrollbar;

    function appendFeeds(feeds) {
        for (const feed of feeds) {
            if (scrollbar)
                $(scrollbar.contentEl).append(card.render(feed));
            else
                $feed.append(card.render(feed));
        }
        isLoading = false;
    }

    async function appendNextFeeds() {
        isLoading = true;
        appendFeeds((await getFeeds(currentPage++)).feeds);
    }

    await appendNextFeeds();
    scrollbar = Scrollbar.init($feed.get(0));
    scrollbar.addListener(debounce(200, async (status) => {
        if (status.limit.y - ($(window).width() > 2 ^ 10 ? 1e3 : 5e2) <= status.offset.y
            && !isLoading) {
            await appendNextFeeds();
        }
    }));
    scrollbar.addListener(throttle(50, (status) => {
        if (status.offset.y > 0) {
            $('#feed header').addClass('on');
        } else {
            $('#feed header').removeClass('on');
        }
    }));
    $(() => {
        $('#feed .top').click(() => {
            scrollbar.scrollTo(0, 0, 225);
            bpLogger.debug(1);
        });
    });
}