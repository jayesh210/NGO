const express=require('express');
const app = express();
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send("index.html");
})
app.get('/post',(req,res)=>{
    res.send("Post request received");
})

app.listen(300,()=>{
    console.log('Server side listening on port 300');
});