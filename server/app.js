const express = require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const multer = require("multer");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files to uploads directory
    },

    filename: (req, file, cb) => {
      cb(null, file.originalname); // Keep original file name
    }
  });
 
  const upload = multer({ storage: storage });

  // POST route for file uploading
  app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.originalname });
  });





app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})