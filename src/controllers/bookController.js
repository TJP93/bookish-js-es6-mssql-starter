
import express from 'express';

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response) ); // all books
        this.router.get('/:id', (request, response) => this.getBook(request, response) );  // book/id gets specifc book by ID
        // del, post versions.
        // this.router.delete('/:id', (request, response) => this.deleteBook(request, response) ); 
        // this.router.post('/', (request, response) => this.addBook(request, response) ); 
        this.mock = [{
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
    ];                                                                                                         // grab mock and refer to as this.mock where prev used.
        

       
    }

    getAllBooks(request, response) {
        console.log( "request for all books" + request.url );
        let responseObject = {"result" : this.mock}                                                                            
        response.status(200).send(JSON.stringify(responseObject, null, 2) );
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        for (let i = 0; i <this.mock.length; i++) {
            if (this.mock[i].id == id) {
                response.status(200).send(JSON.stringify(this.mock[i]) );

            }
        }
    }
}

export default new BookController().router;

