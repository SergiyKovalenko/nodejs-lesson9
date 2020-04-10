import * as http from 'http';
import Events from './events';
import Server from './server';

const port = Server.app.get('port');

Events.bind(http.createServer(Server.app).listen(Server), port);