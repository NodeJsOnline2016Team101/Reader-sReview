(function(){
    'use strict';
    var books = require('../models/Book');
    //TODO

    module.exports = function(req, res, next){
        res.render('books', {allBooks: books.getAll()});
    }
}());
