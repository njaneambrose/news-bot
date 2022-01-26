get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');

module.exports.stories = function(url){
    var res = get('GET', url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);

    var a1 ={
        "title": $('.col-lg-5 .default-article.featured a').attr('title'),
    "url": 'https://mpasho.co.ke'+$('.col-lg-5 .default-article.featured a').attr('href'),
    "desp": $('.col-lg-5 .default-article.featured a').attr('title'),
    "img": $('.col-lg-5 .default-article.featured a span.image-loader-image').data('background-image'),
    "src": "Mpasho","home": "https://www.mpasho.co.ke/"}
    return a1
}
