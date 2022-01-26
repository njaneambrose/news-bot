get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');

module.exports.stories = function(url){
    var res = get('GET', url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    //Extract Featured Article
    var a1 ={"title": $('.featured-article h3').text(),"url": 'https://www.the-star.co.ke'+$('.featured-article .row .article-image a').attr('href'),
    "desp": $('.featured-article .row p.article-synopsis').text(),"img": $('.featured-article .row span.image-loader-image').data('background-image'),
    "src": "The Star","home": "https://www.the-star.co.ke/"}
    //Extract Featured article
    return a1;
}
