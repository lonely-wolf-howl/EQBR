import express from 'express';
import EtherRoute from './ether.route';

const router = express.Router();

router.use('/ether', EtherRoute);

module.exports = router;
