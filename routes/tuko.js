get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');


module.exports.stories = function(url){
    var res = get('GET', url);
    console.log(res.getBody());
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('div.thumbnail-picture')[0];

    var a1 ={
        "title":$(t).find('a span').text(),
    "url": $(t).find('a').attr('href'),
    "desp": $(t).find('a span').text(),
    "img": $(t).find('img').attr('src'),
    "src": "Tuko News","home": "https://www.tuko.co.ke/"}
    return a1
}
