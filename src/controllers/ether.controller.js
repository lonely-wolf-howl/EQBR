import { EtherService } from '../services';
import { sendResponse } from '../lib/api/response';

class EtherController {
  _etherService = new EtherService();

  /*
  /api/ether/web3
  */
  showMeWeb3 = async (req, res) => {
    const { data } = await this._etherService.showMeWeb3(req, res);

    sendResponse(res, { ...data }, 200);
  };

  /*
  /api/ether/web3/balance
  */
  getEthBalance = async (req, res) => {
    const { data } = await this._etherService.getEthBalance(req, res);

    sendResponse(res, { ...data }, 200);
  };
}

export default EtherController;
