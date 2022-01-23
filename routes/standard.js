get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');
const the_star = 'https://www.standardmedia.co.ke/'


module.exports.stories = function(url){
    var res = get('GET', the_star+url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    //Extract Featured Articledoc = parser.parseDocument(data);
    var a = $('.mb-0.card a').attr('href');
    var b = $('.mb-0.card h3').text();
    var c = $('.mb-0.card img.first-img').data('src');
    var d = $('.mb-0.card .card-body p.card-text').text();
    s = {"title": b,"img": c,"url": a,"desp": d,"source": "The Standard"}
    return s;
}
