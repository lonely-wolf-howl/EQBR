import { EtherService } from '../services';
import { sendResponse } from '../lib/api/response';

class EtherController {
  _etherService = new EtherService();

  sayHello = async (req, res) => {
    const { data } = await this._etherService.sayHello(req, res);

    sendResponse(res, { ...data });
    /*
      {
        "data": {
          "result": "Hello, World!"
        },
        "success": true
      }
    */
  };
}

export default EtherController;
