import { Router } from 'express';
import { EtherController } from '../controllers';

const router = Router();

const etherController = new EtherController();

router.get('/', etherController.sayHello);

export default router;
