import * as express from 'express';
import Middleware from '../config/middleware';
import Router from '../config/router';

class Server {
    /**
    * @type {express}
    * @constant {express.Application}
    */
    app: express.Application;
   
    constructor() {
        this.app = express();

        /**
        * @description express.Application Middleware
        */
        new Middleware().init(this.app);

        /**
        * @description express.Application Routes
        */
        new Router().init(this.app);

        /**
        * @description sets port 3000 to default or unless otherwise specified in the environment
        */
        this.app.set('port', process.env.PORT || 3000)
    }
}

export default new Server()



