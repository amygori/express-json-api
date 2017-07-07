const express= require('express');
const router = express.Router();

// endpoints in this file are nested under '/api'

router.get('/', function(req, res){
  res.json({ key: "This value is a string" });
})

router.get('/todos', function(req, res){
  res.json([
    {
      item: "Take a nap",
      complete: false
    },
    {
      item: "Eat some guacamole",
      complete: false
    }
  ]);
});



module.exports = router;
