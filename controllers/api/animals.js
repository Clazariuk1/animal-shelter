// router.get('/', animalsCtrl.indexBlogs, animalsCtrl.jsonAnimals)

// router.post('/', userCtrl.auth, animalsCtrl.createAnimal, animalsCtrl.jsonAnimal)

// router.get('/:id', animalsCtrl.showAnimal, animalsCtrl.jsonAnimal)

// router.put('/:id', userCtrl.auth, blogsCtrl.updateBlog, animalsCtrl.jsonAnimal)

// router.delete('/:id', userCtrl.auth, blogsCtrl.deleteBlog, animalsCtrl.jsonAnimal)


const Animal = require('../../models/animal')


const indexAnimals = async ( _ , res, next) => {
    try {
        const animals = await Animals.find({})
        res.locals.data.animals = animals
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createAnimal = async (req, res, next) => {
    try {
        req.body.user = req.user._id
        const animal = await Animal.create(req.body)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


const showAnimal = async (req, res, next) => {
    try {
        req.body.user = req.user._id
        const animal = await Animal.findById(req.params.id)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


const updateAnimal = async (req, res, next) => {
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.animal = animal
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


const deleteAnimal = async (req, res, next) => {
    try {
        const animal = await Animal.findOneAndDelete({_id : req.params.id,  user: req.user._id})
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

function jsonAnimal (_, res) {
    res.json(res.locals.data.animal)
}

function jsonAnimals (_, res) {
    res.json(res.locals.data.animals)
}

module.exports = {
    indexAnimals,
    createAnimal,
    showAnimal,
    updateAnimal,
    deleteAnimal,
    jsonAnimal,
    jsonAnimals
}
