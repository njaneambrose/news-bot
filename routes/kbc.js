get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');
const the_star = 'https://kbc.co.ke/'


module.exports.stories = function(url){
    var res = get('GET', the_star+url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('.block2_first_item.hentry.penci-post-item');

    var a1 ={
        "title":$(t).find('h3 a').attr('title'),
        "url": $(t).find('h3 a').attr('href'),
        "desp": $(t).find('div.penci-post-excerpt').text(),
        "img": $(t).find('a.penci-image-holder').data('src'),
        "source": "KBC"}
    return a1;
}
