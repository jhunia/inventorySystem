import express from 'express';
import {dummyData, getAllProducts,productManagement ,displayMessage} from '../controllers/user.controller.js';
import { validate } from '../Validators/validate.js';
import { validateProduce } from '../Validators/product.validator.js';

const router = express.Router();    
router.get('/all-product', getAllProducts);
router.post('/createProduct', productManagement);
router.get('/dummydata', dummyData);
router.get('/greeting', displayMessage);

export default router;