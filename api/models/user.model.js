import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        reruired: true,
        unique: true,
    },
    email: {
        type: String,
        reruired: true,
        unique: true,
    },
    password: {
        type: String,
        reruired: true,
    }
},{timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;