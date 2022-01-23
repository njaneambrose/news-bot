get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');


module.exports.stories = function(url){
    var res = get('GET', url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('section.zox-art-wrap.zoxrel')[0];

    var a1 ={
        "title":$(t).find('div.zox-art-title h2').text(),
        "url": $(t).find('div.zox-art-title a').attr('href'),
        "desp": $(t).find('p.zox-s-graph').text(),
        "img": $(t).find('img.zox-mob-img').attr('src'),
        "source": "Capital FM"}
    return a1;
}
