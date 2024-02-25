// As a user, I should be able to see all the animals up for adoption
// As a user, I should be able to add an animal as up for adoption
// As a user, I should be able to edit an animal's information in case anything change
//As a user, I should be able to delete an animal's listing in case they find a happy new home!


const express = require('express')
const router = express.Router()
const animalsCtrl = require('../../controllers/api/animals')
const userCtrl = require('../../controllers/api/users')

router.get('/', animalsCtrl.indexAnimals, animalsCtrl.jsonAnimals)

router.post('/', animalsCtrl.createAnimal, animalsCtrl.jsonAnimal) // user auth not currently preventinng this  from happening 02 23 24.

router.get('/:id', animalsCtrl.showAnimal, animalsCtrl.jsonAnimal)

router.put('/:id', animalsCtrl.updateAnimal, animalsCtrl.jsonAnimal)

router.delete('/:id', animalsCtrl.deleteAnimal, animalsCtrl.jsonAnimal)

module.exports = router
