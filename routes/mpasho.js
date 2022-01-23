get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');
const the_star = 'https://mpasho.co.ke/'


module.exports.stories = function(url){
    var res = get('GET', the_star+url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);

    var a1 ={
        "title": $('.col-lg-5 .default-article.featured a').attr('title'),
    "url": $('.col-lg-5 .default-article.featured a').attr('href'),
    "desp": $('.col-lg-5 .default-article.featured a').attr('title'),
    "img": $('.col-lg-5 .default-article.featured a span.image-loader-image').data('background-image'),
    "source": "Mpasho"}
    return a1
}
