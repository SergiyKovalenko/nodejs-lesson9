import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import { Request, Response } from 'express';
import * as ejs from 'ejs';
import { booksRouter } from '../components/Books/router';


export default class Router {
    /**
     * @function
     * @param {express.Application} app
     * @summary init Application router
     * @returns void
     */
    init(app: express.Application): void {
        const router: express.Router = express.Router();

        /**
         * Forwards any requests to the /v1/books URI to BooksRouter.
         * @name /v1/books
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/books', booksRouter);

        /**
         * @description No results returned mean the object is not found
         * @function
         * @inner
         * @param {callback} middleware - Express middleware.
         */
        app.use((req: Request, res: Response) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        // render file to html
        app.engine('html', ejs.renderFile);

        // use a template engine
        app.set('view engine', 'html');
        
        // change path to views folder
        app.set('views', path.join(__dirname, '../../public'));

        /**
         * @function
         * @inner
         * @param {express.Router}
         */
        app.use(router);
    }
}