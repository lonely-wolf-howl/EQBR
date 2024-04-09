import { EtherService } from '../services';
import { sendResponse } from '../lib/api/response';

class EtherController {
  _etherService = new EtherService();

  sayHello = async (req, res) => {
    const { data } = await this._etherService.sayHello(req, res);

    sendResponse(res, { ...data }, 200);
    /*
      {
        "data": {
          "result": "Hello!"
        },
        "success": true
      }
    */
  };

  showMeWeb3 = async (req, res) => {
    const { data } = await this._etherService.showMeWeb3(req, res);

    sendResponse(res, { ...data }, 200);
  };

  getEthBalance = async (req, res) => {
    const { data } = await this._etherService.getEthBalance(req, res);

    sendResponse(res, { ...data }, 200);
  };
}

export default EtherController;
