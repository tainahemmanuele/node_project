const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();
const bookService = require('../services/goodreadsService');

function router(nav) {
    const books = [
        {
            title: 'War and Peace',
            genre: 'Historical fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'Les Misérables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false

        },
        {
            title: 'The Time Machine',
            genre: 'Science Fiction',
            author: 'H. G. Wells',
            read: false
        },
        {
            title: 'A Journey into the Center of the Earth',
            genre: 'Science Fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'The Wind in the Willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        },
        {
            title: 'Life On The Mississippi',
            genre: 'History',
            author: ' Mark Twain',
            read: false
        }, {
            title: 'Childhood',
            genre: 'Biography',
            author: 'Lev Nikolayevish Tolstoy',
            read: false
        }];

    const { getIndex, getById, middleware } = bookController(bookService, nav);

    bookRouter.use(middleware);

    bookRouter.route('/').get(getIndex);

    bookRouter.route('/:id').get(getById);

    return bookRouter;
}

module.exports = router;