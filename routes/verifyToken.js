const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

  try {
    const token = req.header('authorization');
    jwt.verify( token, process.env.SECRET_TOKEN, (err, verify) => {
        if(err) {
          res.redirect('/register')
          
        }
        next()
    }  )
  } catch (err) {
    res.status(400).send('Le Token est invalid')
  }
  

  }











