var express = require('express');
var router = express.Router();
var booksController =  require('../controllers/books-controller');

/* GET all books. */
router.get('/', booksController);

module.exports = router;
