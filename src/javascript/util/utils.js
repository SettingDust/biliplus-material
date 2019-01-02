module.exports = {
    throttle: (fn, gapTime) => {
        let _lastTime = null;

        return () => {
            let _nowTime = new Date();
            if (_nowTime - _lastTime > gapTime || !_lastTime) {
                fn();
                _lastTime = _nowTime;
            }
        };
    },
    search: (text) => {
        if (text.match(/\d+/)) {
            window.open(`/video/av${text}`);
        }
    }
};