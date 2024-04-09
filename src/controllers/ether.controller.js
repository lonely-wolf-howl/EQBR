import { EtherService } from '../services';
import { sendResponse } from '../lib/api/response';
import dotenv from 'dotenv';

dotenv.config();

class EtherController {
  _etherService = new EtherService();

  /*
  /api/ether/web3
  */
  showMeWeb3 = async (req, res) => {
    const { data } = await this._etherService.showMeWeb3();

    sendResponse(res, { ...data }, 200);
  };

  /*
  /api/ether/web3/balance
  */
  getEthBalance = async (req, res) => {
    const { WALLET_ADDRESS: address } = process.env;
    const { data } = await this._etherService.getEthBalance(address);

    sendResponse(res, { ...data }, 200);
  };

  /*
  /api/ether/web3/transaction
  */
  getRecentTransactions = async (req, res) => {
    const { WALLET_ADDRESS: address } = process.env;
    const { data } = await this._etherService.getRecentTransactions(address);

    sendResponse(res, { ...data }, 200);
  };
}

export default EtherController;
