export default {
    bpThrottle: (fn, gapTime) => {
        let _lastTime = null;

        return () => {
            let _nowTime = new Date();
            if (_nowTime - _lastTime > gapTime || !_lastTime) {
                fn();
                _lastTime = _nowTime;
            }
        };
    },
    bpSearch: (text) => {
        bpLogger.debug(text);
        if (text.match(/\d+/)) {
            window.open(`/video/av${text}`);
        } else {
            location.assign(`/search?q=${text}`);
        }
    }
};