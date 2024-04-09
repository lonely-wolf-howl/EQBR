import { Router } from 'express';
import { EtherController } from '../controllers';

const router = Router();

const etherController = new EtherController();

router.get('/', etherController.sayHello);
router.get('/web3', etherController.showMeWeb3);

export default router;
