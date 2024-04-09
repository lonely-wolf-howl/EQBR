import dotenv from 'dotenv';
import Web3 from 'web3';
import { ApplicationError } from '../lib/api/error';
import { Messages } from '../error/messages';

dotenv.config();

class EtherService {
  constructor() {
    const { PROVIDER_URL: url } = process.env;
    this.web3 = new Web3(url);
  }

  sayHello = async () => {
    return {
      data: { result: 'Hello!' },
    };
  };

  showMeWeb3 = async () => {
    console.log(this.web3);

    return {
      data: { result: 'Hello, Web3!' },
    };
  };

  getEthBalance = async () => {
    const { WALLET_ADDRESS: address } = process.env;
    try {
      const balance = await this.web3.eth.getBalance(address);
      const wei = this.web3.utils.fromWei(balance, 'ether');
      const integer = parseInt(wei);

      return { data: { result: integer } };
    } catch (error) {
      throw new ApplicationError({
        type: ApplicationError.type.WEB3,
        code: 400,
        message: Messages.GET_BALANCE,
      });
    }
  };
}

export default EtherService;
