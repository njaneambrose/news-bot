get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');


module.exports.stories = function(url){
    var res = get('GET', url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('ul.home-featured li.first-big');

    var a1 ={
        "title":$(t).find('div.title').text(),
    "url": $(t).find('a').attr('href'),
    "desp": $(t).find('div.title').text(),
    "img": $(t).find('img').attr('src'),
    "src": "Ghafla","home": "http://www.ghafla.com/ke/"}
    return a1
}
