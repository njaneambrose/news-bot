get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');

module.exports.stories = function(url){
    var res = get('GET', url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('.card.rounded-0.border-0')[0];

    var a1 ={
        "title":$(t).find('a').text(),
        "url": $(t).find('a').attr('href'),
        "desp": $(t).find('a').attr('title'),
        "img": $(t).find('img').attr('src'),
        "source": "pd"}
    return a1
}
