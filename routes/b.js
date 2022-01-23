const standard = require('./standard');
const star = require('./the_star');
const ghafla = require('./ghafla');
const mpasho = require('./mpasho');
const kens = require('./kenyans');
const kbc = require('./kbc');
const pd = require('./pd');
const capital = require('./capital');

const the_star = {
    "news": "news/",
    "sports": "sports/",
    "business": "business/",
    "regional": "counties/",
    "africa": "news/africa/",
    "world": "news/world/",
    "health": "health/",
    "gossip": "sasa/"
} 

const the_standard = {
    "news": "category/588/national",
    "regional": "category/1/counties",
    "politics": "category/3/politics",
    "gossip": "entertainment/"
}

const the_ghafla = {
    "gossip": "ke/category/entertainment/" 
}

const the_mpasho = {
    "gossip": ""
}

const the_pd = {
    "news": "/news/",
    "business": "category/business/",
    "sports": "category/sports/"
}

const the_kenyans = {
    "local": "news"
}

const the_kbc = {
    "news": "news/",
    "business": "business/",
    "sports": "sports/",
    "gossip": "lifestyle/"
}

const the_capital = {
    "news": "news/section/kenya/",
    "gossip": "thesauce/",
    "business": "business/",
    "sports": "sports/",
    "corona": "news/section/coronavirus/",
    "watch": "news/section/countdown-to-2022/"
}

console.log(standard.stories(the_standard.gossip));