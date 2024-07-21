const News = require('../models/newsModel');

exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter as notícias' });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'Notícia não encontrada' });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a notícia' });
    }
};

exports.createNews = async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar a notícia' });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!news) {
            return res.status(404).json({ message: 'Notícia não encontrada' });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a notícia' });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'Notícia não encontrada' });
        }
        res.json({ message: 'Notícia excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir a notícia' });
    }
};
