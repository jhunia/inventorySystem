import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Groceries', 'Book'],
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    discount: {
        type: String,
        required: true,
        enum: ['bulk' , 'seasonal', 'clearance' , 'membership'],
    }

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;