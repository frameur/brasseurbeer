const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/brasbeer',{useNewUrlParser: true,
useUnifiedTopology: true});

const app = express();

// Express Static
app.use(express.static("public"));

// Template EJS
app.set("view engine", "ejs");

//Page d'accueil
app.get('/', (req,res) =>{
  res.render("index")  
   
})

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
const port = 2002;
app.listen(port, () => {
  console.log(
    `Ecoute le port ${port}, lancé à : ${new Date().toLocaleString()}`
  );
});