import express from 'express';
import {dummyData, getAllProducts,productManagement} from '../controllers/user.controller.js';


const router = express.Router();    
router.get('/all-product', getAllProducts);
router.post('/product', productManagement);
router.get('/dummydata', dummyData);

export default router;