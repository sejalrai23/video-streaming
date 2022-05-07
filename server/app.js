const express=require('express');
const fs=require('fs'); //used to read and write files easily on our server
const cors=require("cors");
const path=require("path");
const app=express();
const videoRoutes= require('./routes/video');
app.use(cors());


app.get('/video',(req,res)=>{
    res.sendFile('assets/video1.mp4', {root:__dirname});

});
app.use('/api',videoRoutes);

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(5000 || process.env.PORT , ()=>{
    console.log("server started at port 5000!");
});
