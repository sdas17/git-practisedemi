const express = require("express");
const demo = express();

const mongoose = require("./database/mongoose");

// demo.listen(3000,function (){
//     console.log(`server started on port 3000`);
// })
demo.listen(()=>{
    console.log(`server started on port 3000 server started progamming `);
})