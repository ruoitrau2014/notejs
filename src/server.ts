import express,{Request,Response} from 'express';
const port=process.env.POST || 5000;
const app=express();

app.listen(port,()=>{
    console.log('SV lang nghe tai port' + port);
});
app.get('/',(req:Request,res:Response) => {
    res.send("hello word");
});