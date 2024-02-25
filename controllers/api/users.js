require('dotenv').config()
const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: payloadFromJWT._id })
        console.log(token)
if(!user) throw new Error ('bad credentials')
        req.user = user
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// router.post('/', userCtrl.createUser)


// exports.auth = async (req, res, next) => {
//     // https://i.imgur.com/3quZxs4.png
//     // step 5 happens here
//     try {
//       const token = req.header('Authorization').replace('Bearer ', '')
//       const payloadFromJWT = jwt.verify(token, process.env.SECRET)
//       // https://i.imgur.com/IXByEPP.png image explaining jwt structure
//       const user = await User.findOne({ _id: payloadFromJWT._id })
//       if (!user) {
//         throw new Error()
//       }
//       req.user = user
//       next()
//     } catch (error) {
//       res.status(401).send('Not authorized')
//     }
//   }



const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const token = await user.generateAuthToken()
        res.json({ user, token })
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


 const loginUser = async (req, res) => {
    try{
      const user = await User.findOne({ email: req.body.email })
      if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(400).send('Invalid login credentials')
      } else {
        const token = await user.generateAuthToken()
        res.json({ user, token })
      }
    } catch(error){
      res.status(400).json({message: error.message})
    }
  }


const updateUser = async (req, res, next) => {
    try {
        const updates = Object.keys(req.body)
        const user = await User.findOne({ _id: req.params.id})
        updates.forEach(update => user[update] = req.body[update])
        await user.save()
        res.json(user)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


const deleteUser = async (req, res) => {
    try {
        await req.user.deleteOne()
        res.json({ msg: 'user deleted' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


module.exports = {
    auth,
    createUser,
    loginUser,
    updateUser,
    deleteUser
}

// function createJWT(user){
//     return jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' })
// }
