const NodeCache = require("node-cache");
const myCache = new NodeCache();
const axios = require('axios');

const apiKey = process.env.NEWS_API_KEY;
exports.get_main_news = (req, res) => {
    const obj = req.body;
    const cacheData = myCache.get("apiData");
    console.log(req.body);
    if(cacheData === undefined){
        axios.all([
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`),
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`),
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`),
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`),
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`),
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`),
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`),
        ]).then(axios.spread((general, science, business, entertainment, health, sports, technology) => {
            const obj = {
                general: general.data,
                science: science.data,
                business: business.data,
                entertainment: entertainment.data,
                health: health.data,
                sports: sports.data,
                technology: technology.data,
            };
            myCache.set("apiData", obj, 18000);
            res.json({data: myCache.get("apiData"), message: "Axios call data"});
        }))
        .catch(err => {
            res.json(err);
        })
    }
    else{
        res.json({data: myCache.get("apiData"), message: "cache data"});
    }
}