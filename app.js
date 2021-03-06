const express = require('express')
    , mongoose = require('mongoose')
    , multer = require('multer')
    , path = require('path')
    , app = express()
    , port = 2002
    , verifyToken = require('./routes/verifyToken')


mongoose.connect('mongodb://localhost:27017/brasbeer',{useNewUrlParser: true,
useUnifiedTopology: true});
console.log("status mongoose:", mongoose.connection.readyState);


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Route
const { getHomePage} = require('./routes/index')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')

//Api
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.get('/',   getHomePage)


// Express Static
app.use(express.static("public"));

// Upload image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const date = Date.now();
    cb(null, date + "-" + file.originalname);
    
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 8 * 2048 * 2048,
    files: 1,
  },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/gif"  ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true);
    } else
      cb(new Error("Le fichier doit être au format png, jpg, jpeg ou gif."));
  },
});

// Template EJS
app.set("view engine", "ejs");





//Page fabrication biere
app.get('/fabbeer', (req,res) =>{
  res.render("fabbeer")  
     
  })

//Page histoire de la biere
app.get('/histbeer', (req,res) =>{
  res.render("histbeer")  
     
  })
//Page biere differente
app.get('/diffbeer', (req,res) =>{
  res.render("diffbeer")  
     
  })
//page detail brasseur
app.get('/detailbra', (req,res) =>{
  res.render("detailbra")  
     
  })
//page liens et information
app.get('/liensinfos', (req,res) =>{
  res.render("liensinfos")  
     
  })

//page login
app.get('/login', (req,res) =>{
  res.render("login")  
     
  })
//page enregistrer
app.get('/register', (req,res) =>{
  res.render("register")  
     
  })

// Contact
app.get ("/contact", (req,res) => {
  res.render("contact")
})


// Localhost

app.listen(port, () => {
  console.log(` port ${port}, lancé à : ${new Date().toLocaleString()}`)})