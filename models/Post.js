import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('Posts', PostSchema);