const router = require('express').Router()
const Post = require('../model/post.model')

// get all post
router.get('/', async(req, res)=>{
  try {
    const post = await Post.find()
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

// create new post
router.post('/new', async(req, res)=>{
  const newPost = new Post(req.body)
  try {
    const savePost = await newPost.save()
    res.status(200).json(savePost)
  } catch (error) {
    res.status(500).json(error)
  }
})

//update the post
router.put('/:id', async(req, res)=>{
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new:true })
    res.status(200).json(updatePost)
  } catch (error) {
    res.status(500).json(error)
  }
})

//delete the post
router.delete('/:id', async(req, res)=>{
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({message: 'Post has been deleted successfully', post})
  } catch (error) {
    res.status(500).json(error)
  }
} )

module.exports = router
