get = require('sync-request')
const parser = require('htmlparser2');
const cheerio = require('cheerio');
const the_star = 'https://www.standardmedia.co.ke/category/1/counties'
const fs = require('fs');

fs.readFile('news.txt',function(err,data){
    doc = parser.parseDocument(data);
    const $ = cheerio.load(doc);
    console.log($('.mb-0.card').length)
    var a = $('.mb-0.card a').attr('href');
    var b = $('.mb-0.card h3').text();
    var c = $('.mb-0.card img.first-img').data('src');
    var d = $('.mb-0.card .card-body p.card-text').text();

    console.log(a,b,c,d);
})