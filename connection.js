// import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ElizabethJohn:elizabeth@cluster0.c2swzyd.mongodb.net/OpenBatchDB?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('connected to db')
})
.catch((error)=>{
    console.log('catch error')
})


