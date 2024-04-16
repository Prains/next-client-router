"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientRouter = {
    push: (url) => window.history.pushState(undefined, "", url),
    replace: (url) => window.history.replaceState(undefined, "", url),
};
exports.default = clientRouter;
