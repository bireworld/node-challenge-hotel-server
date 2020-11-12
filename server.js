const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//Use this array as your (in-memory) data store.
const bookings = require("./bookings.json");

app.get("/", function (request, response) {
  response.send("Hotel booking server.  Ask for /bookings, etc.");
});

// TODO add your routes and helper functions here
// Reading all Bookings
app.get("/bookings", (req,res)=>{
  res.send(bookings)
})

//New booking Created
app.post('/bookings',(req,res)=>{
  
   if(req.body.text || req.body.title || req.body.firstName || req.body.surname || req.body.email || req.body.roomId || req.body.checkInDate  ){
  bookings.id = bookings.length

  const newBooking = req.body
  newBooking.id=bookings.length + 1
     req.body.id = newBooking.id;
      //req.body.timeSent = new Date ();
      bookings.push (req.body);
      res
        .status (201)
        .json (` Successfully A new booking with Id number ${newBooking.id}  is created.`);
 
   }
  else{
    res.status(400).send("Bad Request")
  }     
     });



const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
