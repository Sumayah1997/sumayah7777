const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 3000;

//user file in the public folder
app.use(express.static(path.join(__dirname,'assigment7')));
//route for home 
app.get('/home',(req,res)=>
{res.sendFile(path.join(__dirname,'assigment7','fristpage.html'))});
//route for product
app.get('/product',(req,res)=>
{res.sendFile(path.join(__dirname,'assigment7','allproduct11.html'))}); 
//route for about us
app.get('/reviws',(req,res)=>
{res.sendFile(path.join(__dirname,'assigment7','revwiespage1.html'))});

app.get('/search',(req,res)=>
{res.sendFile(path.join(__dirname,'assigment7','seach.html'))});

app.get('/loctiona',(req,res)=>
{res.sendFile(path.join(__dirname,'assigment7','location.html'))});
//start the server
app.listen(PORT,()=>
{console.log(`Server is runnign on http://localhost:${PORT}`);});