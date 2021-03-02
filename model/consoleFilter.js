const timeFormat = require("../tools/timeFormat")
const config = require("../config")

console.log = (function (log) {
    return function (...args) {
        // 是否开启日志
        if (config.log.openConsoleLog) {
            try {
                log.call(console, timeFormat("[YYYY-mm-dd HH:MM:SS]", new Date()), ...args);
            } catch (e) {
                console.error('console.log filter error', e);
            }
        }
    }
})(console.log);