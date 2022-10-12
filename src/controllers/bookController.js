
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
            "id": 1,
            "title": "mock",
            "author": "lewis"
        },
        {
            "id": 2,
            "title": "mock2",
            "author": "martin"
        },
        {
            "id": 3,
            "title": "mock3",
            "author": "dickens"
        },
        {
            "id": 4,
            "title": "mock4",
            "author": "shakespeare"
        },
        {
            "id": 5,
            "title": "mock5",
            "author": "tolkien"
        }
    ]; 
    let responseObject = {"result" : mock}                                                                                                    // mock object make array for plausible response.
        response.status(200).send(JSON.stringify(responseObject, null, 2) );
    }

    getBook(request, response) {
        const id = request.params.id;
        const mock = [{
            "id": 1,
            "title": "mock",
            "author": "lewis"
        },
        {
            "id": 2,
            "title": "mock2",
            "author": "martin"
        },
        {
            "id": 3,
            "title": "mock3",
            "author": "dickens"
        },
        {
            "id": 4,
            "title": "mock4",
            "author": "shakespeare"
        },
        {
            "id": 5,
            "title": "mock5",
            "author": "tolkien"
        }
    ];
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        for (let i = 0; i <mock.length; i++) {
            if (mock[i].id == id) {
                response.status(200).send(JSON.stringify(mock[i]) );

            }
        }

        

       //  const mock = {"id": 1, "title" : "mock", "author": "lewis"};  // mock object. Work out how to return some different books rather than just lewis, array? if id > x etc? For loop?
       // response.status(200).send(JSON.stringify(mock) );
    }
}

export default new BookController().router;

