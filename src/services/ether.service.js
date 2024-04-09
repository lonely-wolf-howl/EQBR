import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

class EtherService {
  sayHello = async () => {
    return {
      data: { result: 'Hello!' },
    };
  };

  showMeWeb3 = async () => {
    const { URL: url } = process.env;
    const web3 = new Web3(url);
    console.log(web3);

    return {
      data: { result: 'Hello, Web3!' },
    };
  };
}

export default EtherService;
