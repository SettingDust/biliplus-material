export default class Router {
    constructor() {
        this._routes = [];
    }

    push(router) {
        this.routes.push(router);
    }

    get routes() {
        return this._routes;
    }

    load(href) {
        bpLogger.debug(this.routes);
        this.routes.some(route => {
            if (route.route && route.test(href)) {
                route.route.then((result) => {
                    result.default(route.match(href)).then((result) => {
                        if (result) return true;
                    });
                });
            }
        });
    }
};
