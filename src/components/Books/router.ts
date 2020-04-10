import { Router } from 'express';
import BooksComponent from '.';

class BooksRouter {
    /**
     * Express router to mount books related functions on.
     * @type {Express.Router}
     * @const
     */
    public router: Router = Router();

    init() {
        /**
        * Route show map.
        * @name /v1/books
        * @function
        * @inner
        * @param {string} path - Express path
        * @param {callback} middleware - Express middleware.
        */
        this.router.get('/', BooksComponent.map);

        /**
        * Route serving list of books.
        * @name /v1/books
        * @function
        * @inner
        * @param {string} path - Express path
        * @param {callback} middleware - Express middleware.
        */
        this.router.get('/', BooksComponent.chart);

        return this;
    }

    get booksRouter(): Router {
        return this.router;
    }
}

export const { booksRouter } = new BooksRouter().init();