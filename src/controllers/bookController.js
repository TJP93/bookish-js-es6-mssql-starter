
import express from 'express';

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response) ); // all books
        this.router.get('/:id', (request, response) => this.getBook(request, response) );  // book/id gets specifc book by ID
    }

    getAllBooks(request, response) {
        console.log( "request for all books" + request.url );
        const mock = [{
            "id": id,
            "title": "mock",
            "author": "lewis"
        },
        {
            "id": id,
            "title": "mock2",
            "author": "martin"
        },
        {
            "id": id,
            "title": "mock3",
            "author": "dickens"
        },
        {
            "id": id,
            "title": "mock4",
            "author": "shakespeare"
        },
        {
            "id": id,
            "title": "mock5",
            "author": "tolkien"
        }
    ];                                                                                                     // mock object make array for plausible response.
        response.status(200).send(JSON.stringify(mock) );
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        const mock = {"id": id, "title" : "mock", "author": "lewis"};  // mock object. Work out how to return some different books rather than just lewis, array? if id > x etc?
        response.status(200).send(JSON.stringify(mock) );
    }
}

export default new BookController().router;

