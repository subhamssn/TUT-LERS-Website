const express = require('express');
const { models } = require('mongoose');

const details = require('../models/detail');
const slideDetail = require('../models/slider');
const routes = express.Router();

routes.get('/', async (req, res) => {
    const detail = await details.findById("641af86b1adcb0deccbc4fe7");
    const slidesDetail = await slideDetail.find();
    console.log(detail);
    return res.render('index', {
        detailss: detail, 
        slides: slidesDetail
    });
});

routes.get('/gallery', async (req, res) => {

    const detail = await details.findById("641ab65f847aab10277dc74a");
    return res.render('gallery', {
        detailss: detail
    });
});

module.exports = routes;