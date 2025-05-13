import {body} from "../controllers/user.controller.js";

body('name')
.isString().withMessage('Name must be a string')
.isEmpty().withMessage('Name is required')

body('id')
.isNumeric().withMessage('Id must be a number')
.isEmpty().withMessage('Id is required')
.isLength({max: 5}).withMessage('Id must be at most 5 characters long')

body('catergory')
.isString().withMessage("Category must be a string")
isEmpty().withMessage('Category is required')
.isIn(['Electronics', 'Clothing', 'Groceries', 'Book']).withMessage('Category must be one of Electronics, Clothing, Groceries, or Book')

body('price')
.isNumeric().withMessage('Price must be a number')
.isEmpty().withMessage('Price is required')

body('stock')
.isNumeric().withMessage('Stock must be a number')  
.isEmpty().withMessage('Stock is required') 

body('discount')
.isString().withMessage('Discount must be a string')
.isEmpty().withMessage('Discount is required')
.isIn(['bulk', 'seasonal', 'clearance', 'membership']).withMessage('Discount must be one of bulk, seasonal, clearance, or membership')
