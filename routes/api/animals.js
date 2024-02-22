// As a user, I should be able to see all the animals up for adoption
// As a user, I should be able to add an animal as up for adoption
// As a user, I should be able to edit an animal's information in case anything change
//As a user, I should be able to delete an animal's listing in case they find a happy new home!


const express = require('express')
const router = express.Router()
const animalsCtrl = require('../../controllers/api/animals')
const userCtrl = require('../../controllers/api/user')

router.get('/', animalsCtrl.indexBlogs, animalsCtrl.jsonAnimals)

router.post('/', userCtrl.auth, animalsCtrl.createAnimal, animalsCtrl.jsonAnimal)

router.get('/:id', animalsCtrl.showAnimal, animalsCtrl.jsonAnimal)

router.put('/:id', userCtrl.auth, blogsCtrl.updateBlog, animalsCtrl.jsonAnimal)

router.delete('/:id', userCtrl.auth, blogsCtrl.deleteBlog, animalsCtrl.jsonAnimal)

module.exports = router
