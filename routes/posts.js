import express from 'express';
import Post from '../models/Post';

const router = express.Router();

//insert
router.post('/', async(req, res) => {
    const post = new Post({
        firstName: req.body.firstName,
        description: req.body.description,
    });

    // const savedPost = await post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({message: err});
    // })
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({message: err});      
    }
});

//all 
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});      
    }
});


// specific
router.get('/:postId', async(req, res) => {
    try {
        const posts = await Post.findById(req.params.postId);
        res.json(posts);
    } catch (err) {
        res.json({message: err});      
    }
});

router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});      
    }
});

//update
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {firstName: req.body.firstName}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});      
    }

});export default router;