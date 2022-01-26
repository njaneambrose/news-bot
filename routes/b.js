const standard = require('./standard');
const star = require('./the_star');
const ghafla = require('./ghafla');
const mpasho = require('./mpasho');
const kens = require('./kenyans');
const kbc = require('./kbc');
const pd = require('./pd');
const capital = require('./capital');
var path = require('path');
var dir = require('../d');
const fs = require('fs');
const { setTimeout } = require('timers/promises');

// News Sources
const urls = [
    {"url": "https://www.the-star.co.ke/news/","ct": "news","src": "The Star"},
    {"url": "https://www.standardmedia.co.ke/category/588/national","ct": "news","src": "The Standard"},
    {"url": "https://www.pd.co.ke/news/","ct": "news","src": "K24"},
    {"url": "https://www.kbc.co.ke/news/","ct": "news","src": "KBC"},
    {"url":"https://www.capitalfm.co.ke/news/section/kenya/","ct": "news","src": "Capital FM"},
    {"url": "https://www.the-star.co.ke/sports/","ct":"sports","src": "The Star"},
    {"url": "https://www.pd.co.ke/category/sports/","ct": "sports","src": "K24"},
    {"url": "https://www.kbc.co.ke/sports/","ct": "sports","src": "KBC"},
    {"url": "https://www.capitalfm.co.ke/sports/","ct":"sports","src": "Capital FM"},
    {"url": "https://www.the-star.co.ke/business/","ct": "business","src": "The Star"},
    {"url": "https://www.pd.co.ke/category/business/","ct": "business","src": "K24"},
    {"url": "https://www.kbc.co.ke/business/","ct": "business","src": "KBC"},
    {"url": "https://www.capitalfm.co.ke/business/","ct": "business","src": "Capital FM"},
    {"url": "https://www.the-star.co.ke/counties/","ct": "regional","src": "The Star"},
    {"url": "https://www.standardmedia.co.ke/category/1/counties","ct":"regional","src": "The Standard"},
    {"url": "https://www.the-star.co.ke/news/africa/","ct": "international","src": "The Star"},
    {"url": "https://www.the-star.co.ke/news/world/","ct": "international","src": "The Star"},
    {"url": "https://www.capitalfm.co.ke/news/section/world/","ct": "international", "src": "Capital FM"},
    {"url": "https://www.the-star.co.ke/sasa/","ct": "gossip","src": "The Star"},
    {"url": "http://www.ghafla.com/ke/","ct": "gossip","src": "Ghafla"},
    {"url": "https://www.mpasho.co.ke/","ct":"gossip","src": "Mpasho"},
    {"url": "https://www.kbc.co.ke/lifestyle/","ct": "gossip","src": "KBC"},
    {"url": "https://www.capitalfm.co.ke/thesauce/","ct": "gossip","src": "Capital FM"},
    {"url": "https://www.the-star.co.ke/health/","ct": "health","src": "The Star"},
    {"url": "https://www.kenyans.co.ke/news","ct": "local","src": "Kenyans"},
    {"url": "https://www.capitalfm.co.ke/news/section/coronavirus/","ct": "health","src": "Capital FM"},
    {"url": "https://www.capitalfm.co.ke/news/section/countdown-to-2022/","ct": "watch","src": "Capital FM"},
    {"url": "https://www.standardmedia.co.ke/category/3/politics","ct": "watch","src": "The Standard"}
]   

const start = new Date().getTime();

function rep(){
    try{
        var news = [];
        urls.forEach(function(e){
            var n;
            if(e.src === "The Star"){
                n = star.stories(e.url);
            }else if(e.src === "The Standard"){
                n = standard.stories(e.url);
            }else if(e.src === "Capital FM"){
                n = capital.stories(e.url);
            }else if(e.src === "KBC"){
                n = kbc.stories(e.url);
            }else if(e.src === "K24"){
                n = pd.stories(e.url);
            }else if(e.src === "Mpasho"){
                n = mpasho.stories(e.url);
            }else if(e.src === "Ghafla"){
                n = ghafla.stories(e.url);
            }else{
                n = kens.stories(e.url);
            }
            n.ct = e.ct;
            news.push(n);
        })
    }catch(e){
        console.error(e)
    }
    fs.writeFileSync(path.join(dir,'/public/news.json'),JSON.stringify(news),function(err){
        console.log(err);
    })
    
    const en = new Date().getTime();
    var t = `Run at ${new Date()} crawling took ${en-start}ms\n`;
    
    fs.appendFileSync(path.join(dir,'/public/t.log'),t,(err)=>{
        console.log(err);
    })    
}

module.exports.crawl = rep;