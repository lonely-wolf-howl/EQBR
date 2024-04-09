import { Router } from 'express';
import { EtherController } from '../controllers';

const router = Router();

const etherController = new EtherController();

router.get('/web3', etherController.showMeWeb3);
router.get('/web3/balance', etherController.getEthBalance);

export default router;
