(function(){
    var mongoose = require('mongoose');
    'use strict';
    //TODO

    function getAll(){
        //TODO
        return [{
            title: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien'
        },{
            title: 'Harry Potter',
            author: 'J.K. Rowling'
        }]
    }


    module.exports = {
        getAll: getAll
        //TODO
    }
}());
