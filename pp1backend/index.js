
const express = require ("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.post("/check",(req,res)=>{
    const params = req.body;
    console.log(params);
    res.send(params);
})
app.listen(8080,()=>{
    console.log(`server running at port http://localhost:8080/check`);
})