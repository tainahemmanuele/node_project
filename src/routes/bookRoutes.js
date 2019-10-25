const express = require('express');
const bookRouter = express.Router();

function router(nav){
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
        res.render('booksListView',
            {
                nav,
                title: 'Library',
                books 
            });
    });
    
    bookRouter.route('/:id').get((req, res) => {
        const {id} = req.params;
        res.render('bookView',
            {
                nav,
                title: 'Library',
                book: books[id]
            });
        res.send('hello single book');
    });

    return bookRouter;
}

module.exports = router;