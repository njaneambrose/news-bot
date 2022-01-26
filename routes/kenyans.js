get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');

module.exports.stories = function(url){
    var res = get('GET', url);
    doc = parser.parseDocument(res.getBody()); // Parse document
    const $ = cheerio.load(doc);
    var t = $('.news-list-story.clearfix')[0];

    var a1 ={
        "title":$(t).find('h2 a').text(),
        "url": 'https://www.kenyans.co.ke'+$(t).find('h2 a').attr('href'),
        "desp": $(t).find('.news-body').text(),
        "img": 'https://www.kenyans.co.ke'+$(t).find('img.b-lazy').data('src'),
        "src": "Kenyans","home": "https://www.kenyans.co.ke/"}
    return a1
}
