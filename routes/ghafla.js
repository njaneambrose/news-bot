get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');
const the_star = 'http://www.ghafla.com/'


module.exports.stories = function(url){
    var res = get('GET', the_star+url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('.blog-post.blgtyp2')[0];

    var a1 ={
        "title":$(t).find('a').attr('title'),
    "url": $(t).find('a').attr('href'),
    "desp": $(t).find('h3 a').text(),
    "img": $(t).find('img').attr('src'),
    "source": "Ghafla"}
    return a1
}
