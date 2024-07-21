const mongoose = require('../config/database');

const newsSchema = new mongoose.Schema({
    title: String,
    image: String,
    desc: String,
    link: String,
    date: { type: Date, default: Date.now }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;