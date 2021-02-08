const session = require("express-session");
const secret = "sessiontest";

module.exports = session({
    secret,
    resave: false,
    name: "seeeionid",
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
    },
})