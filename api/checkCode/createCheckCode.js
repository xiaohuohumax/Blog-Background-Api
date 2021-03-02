const svgCaptcha = require('svg-captcha');

const config = require('../../config');

module.exports = async (req, res) => {
    try {
        svgCaptcha.loadFont(config.svgCaptcha.fontUrl);
    } catch (error) {}

    let kind = Math.round(Math.random() * 10) > 5 ? "createMathExpr" : "create";


    let captcha = svgCaptcha[kind](config.svgCaptcha);

    req.session.captcha = captcha.text;

    res.type('svg');
    res.status(200).send(captcha.data);
}