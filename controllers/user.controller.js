import Product from '../models/User.models.js';


export const productManagement = async (req, res) => {
   const {name , id , category, price, stock, discount} = req.body;
    try {
   
        const existingProduct = await Product.findOne({ id });
        if (existingProduct) {
            return res.status(400).json({
                success: false,
                message: 'Product already exists'
            });
        }
        const newProduct = new Product({
            name,
            id,
            category,
            price,
            stock,
            discount
        });
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating product',
            error: error.message
        });
    }
   
}
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No products found'
            });
        }  
        return res.status(200).json({
            success: true,
            message: 'Products fetched successfully',
            data: products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching products',
            
        });
    }
}
export const dummyData = async (req, res) => {  
    try{
        const product ={
            name: 'Laptop',
            id: '12345',
            category: 'Electronics',
            price: 1000,
            stock: 50,
            discount: 'bulk'
        }
        return res.status(200).json({
            success: true,
            message: 'Dummy data fetched successfully',
            data: product
        });
    } catch (error) {
        console.error('Error fetching dummy data:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching dummy data',
        });
    }
}
 export const displayMessage = (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Hello from the displayMessage endpoint!'
        });
    } catch (error) {
        console.error('Error displaying message:', error);
        return res.status(500).json({
            success: false,
            message: 'Error displaying message',
        });
    }
}