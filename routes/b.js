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
var news = [];


const urls = [
    {"url": "https://www.the-star.co.ke/news/","ct": "news","src": "the-star"},
    {"url": "https://www.standardmedia.co.ke/category/588/national","ct": "news","src": "the-standard"},
    {"url": "https://www.pd.co.ke/news/","ct": "news","src": "pd"},
    {"url": "https://kbc.co.ke/news/","ct": "news","src": "kbc"},
    {"url":"https://www.capitalfm.co.ke/news/section/kenya/","ct": "news","src": "capital-fm"},
    {"url": "https://www.the-star.co.ke/sports/","ct":"sports","src": "the-star"},
    {"url": "https://www.pd.co.ke/category/sports/","ct": "sports","src": "pd"},
    {"url": "https://kbc.co.ke/sports/","ct": "sports","src": "kbc"},
    {"url": "https://www.capitalfm.co.ke/sports/","ct":"sports","src": "capital-fm"},
    {"url": "https://www.the-star.co.ke/business/","ct": "business","src": "the-star"},
    {"url": "https://www.pd.co.ke/category/business/","ct": "business","src": "pd"},
    {"url": "https://kbc.co.ke/business/","ct": "business","src": "kbc"},
    {"url": "https://www.capitalfm.co.ke/business/","ct": "business","src": "capital-fm"},
    {"url": "https://www.the-star.co.ke/counties/","ct": "regional","src": "the-star"},
    {"url": "https://www.standardmedia.co.ke/category/1/counties","ct":"regional","src": "the-standard"},
    {"url": "https://www.the-star.co.ke/news/africa/","ct": "international","src": "the-star"},
    {"url": "https://www.the-star.co.ke/news/world/","ct": "international","src": "the-star"},
    {"url": "https://www.capitalfm.co.ke/news/section/world/","ct": "international", "src": "capital-fm"},
    {"url": "https://www.the-star.co.ke/sasa/","ct": "gossip","src": "the-star"},
    {"url": "http://www.ghafla.com/ke/category/entertainment/","ct": "gossip","src": "ghafla"},
    {"url": "https://mpasho.co.ke/","ct":"gossip","src": "mpasho"},
    {"url": "https://kbc.co.ke/lifestyle/","ct": "gossip","src": "kbc"},
    {"url": "https://www.capitalfm.co.ke/thesauce/","ct": "gossip","src": "capital-fm"},
    {"url": "https://www.the-star.co.ke/health/","ct": "health","src": "the-star"},
    {"url": "https://www.kenyans.co.ke/news","ct": "local","src": "kenyans"},
    {"url": "https://www.capitalfm.co.ke/news/section/coronavirus/","ct": "corona","src": "capital-fm"},
    {"url": "https://www.capitalfm.co.ke/news/section/countdown-to-2022/","ct": "watch","src": "capital-fm"},
    {"url": "https://www.standardmedia.co.ke/category/3/politics","ct": "watch","src": "the-standard"}
]   

const start = new Date().getTime();

function rep(){
    setTimeout(function(){
        rep();
    },1800000); // Run every thirty minutes
    try{
        urls.forEach(function(e){
            var n;
            if(e.src === "the-star"){
                n = star.stories(e.url);
            }else if(e.src === "the-standard"){
                n = standard.stories(e.url);
            }else if(e.src === "capital-fm"){
                n = capital.stories(e.url);
            }else if(e.src === "kbc"){
                n = kbc.stories(e.url);
            }else if(e.src === "pd"){
                n = pd.stories(e.url);
            }else if(e.src === "mpasho"){
                n = mpasho.stories(e.url);
            }else if(e.src === "ghafla"){
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
    var t = en-start+'ms';
    
    fs.appendFileSync(path.join(dir,'/public/t.log'),t,(err)=>{
        console.log(err);
    })    
}

rep();