import dotenv from 'dotenv';
import Web3 from 'web3';
import { ApplicationError } from '../lib/api/error';
import { Messages } from '../error/messages';
import axios from 'axios';

dotenv.config();

class EtherService {
  constructor() {
    const { PROVIDER_URL: url } = process.env;
    this.web3 = new Web3(url);
  }

  showMeWeb3 = async () => {
    console.log(this.web3);

    return {
      data: { result: 'Hello, Web3!' },
    };
  };

  /*
  https://web3js.readthedocs.io/en/v1.10.0/web3-eth.html#getbalance
  */
  getEthBalance = async (address) => {
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

  /*
  https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
  */
  getNormalTransactions = async (address) => {
    const { API_KEY: api_key } = process.env;
    try {
      const response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=desc&page=1&offset=10&apikey=${api_key}`,
      );
      const transactions = response.data.result;

      const formattedTransactions = transactions.map((transaction) => {
        return {
          blockNumber: transaction.blockNumber,
          hash: transaction.hash,
          blockHash: transaction.blockHash,
          from: transaction.from,
          to: transaction.to,
          amount: this.web3.utils.fromWei(transaction.value, 'ether'),
        };
      });

      return {
        data: { result: formattedTransactions },
      };
    } catch (error) {
      throw new ApplicationError({
        type: ApplicationError.type.WEB3,
        code: 400,
        message: Messages.GET_TRANSACTIONS,
      });
    }
  };
}

export default EtherService;
