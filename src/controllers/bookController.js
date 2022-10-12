
import express from 'express';

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response) ); // all books
        this.router.get('/:id', (request, response) => this.getBook(request, response) );  // book/id gets specifc book by ID
    }

    getAllBooks(request, response) {
        console.log( "request for all books" + request.url );
        response.status(500).send({"message" : "please try later" } );
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        const mock = {"id": id, "title" : "mock", "author": "lewis"};  // mock object.
        response.status(200).send(JSON.stringify(mock) );
    }
}

export default new BookController().router;

