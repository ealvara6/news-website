module.exports = function(app){
    const news = require('../controllers/newsController');

    app.route('/api/homeNews')
    .get(news.get_main_news);
}