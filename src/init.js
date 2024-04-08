import dotenv from 'dotenv';
import Http from 'node:http';
import { ExpressApp } from './app';

dotenv.config();

export class Server {
  expressApp = new ExpressApp();
  httpServer;

  constructor() {
    this.httpServer = new Http.Server(this.expressApp.app);
  }

  runServer = async () => {
    try {
      return this.serverListen();
    } catch (error) {
      return this.serverErrorHandler(error);
    }
  };

  serverListen = () => {
    const { PORT: port, HOST: host } = process.env;
    return this.httpServer.listen(port, () => {
      console.log(`Server is running on: http://${host}:${port}`);
    });
  };

  serverErrorHandler = (error) => {
    console.log('Server run error: ', error.message);
  };
}

const server = new Server();

server.runServer();
