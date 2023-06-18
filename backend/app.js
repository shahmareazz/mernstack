const express = require('express');
const app = express();
const PORT = 3451 //PORT
const mongoose = require('mongoose'); //mongoose for DB
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend

//connect backend with DB
mongoose.connect("mongodb+srv://shahmareazz:user1@cluster0.l4zt9vc.mongodb.net/MES")//!insert your username
    .then(() => { console.log("MongoDB connected successfully") })//*success message
    .catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message

// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE
const PRODUCT =require("./model/product")

   app.post('/addData', async (req, res) => {
    try {

        let item = req.body
        console.log(item)

        const saveData = await PRODUCT(item)
        await saveData.save()


        await saveData.save()

        res.send((saveData))




    } 


    catch (error) {
      res.send(error);
    }
    })

    app.get('/getData', async (req, res) => {
      try {
          console.log("reading data")
          const data = await PRODUCT.find({}) //code that find all data from backend
          res.send(data)
      } catch (error) {
          console.log(error)
          res.send(error)
      }
  })
  
  app.put('/updateData/:id', async (req, res) => {
   try {

       let id = req.params.id
       let updateData = { $set: req.body }

       const updated = await PRODUCT.findByIdAndUpdate(id, updateData)

       res.json(updated)

   }  catch (error) {
       console.log(error)
       res.send('error')
   }

})

router.delete('/:id', async (req, res) => {
   try {
       let id = req.params.id
       console.log('id check', id)

       const updated = await PRODUCT.findByIdAndDelete(id)

       res.send("deleted successfully")

   } catch (error) {
       console.log(error)
       res.send('error')
   }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});