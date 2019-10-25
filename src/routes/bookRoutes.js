const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const bookRouter = express.Router();
const debug = require('debug')('app:bookRoutes');
const sql = require('mssql');

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

    bookRouter.route('/').get((req, res) => {

        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';

        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connected correctly to server');

                const db = client.db(dbName);

                const col = await db.collection('books')

                const books = await col.find().toArray();
                res.render(
                    'booksListView',
                    {
                        nav,
                        title: 'Library',
                        books
                    }
                );
            } catch (err) {
                debug(err.stack);
            }
            client.close;
        }());


    });

    bookRouter.route('/:id').get((req, res) => {
        const { id } = req.params;
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';

        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connected correctly to server');

                const db = client.db(dbName);

                const col = await db.collection('books');

                const book = await col.findOne({ _id: new ObjectID(id) });
                debug(book);
                res.render(
                    'bookView',
                    {
                        nav,
                        title: 'Library',
                        book
                    }
                );
            } catch (err) {
                debug(err.stack);
            }
        }());
    });

    return bookRouter;
}

module.exports = router;