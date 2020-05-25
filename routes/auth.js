const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Ajout d'un utilisateur

router.post('/register', async (req, res) => {

    const emailExiste = await User.findOne({
        email: req.body.email
    })
    if (emailExiste) return res.status(400).send("L'émail existe déja")

    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,

    })

    try {
        const newUser = await user.save();
        res.status(201).json({
            newUser
        })
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }

})
router.post('/login', async (req, res) => {
    // Si l'email n'existe pas
    const user = await User.findOne({ email: req.body.email })
    if(!user) return res.status(400).send('L\'email n\'existe pas')
  
    // Vérifier le mot de pass
    const password = await bcrypt.compare(req.body.password, user.password)
    if(!password) return res.status(400).send('Mot de passe incorrect')
  
    // Créer le token
    const token = jwt.sign(
      {_id: user._id},
      process.env.SECRET_TOKEN,
      (err, token) => res.header('authorization', token).json({ token })
      )
  })


module.exports = router;