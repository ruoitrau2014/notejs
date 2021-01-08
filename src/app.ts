

import { Route } from 'core/interface';
import express, { Router } from 'express';
import mongoose from 'mongoose'
class App{
    // khoi tao app
    public app: express.Application;
    public port:string|number;
    constructor(Routes:Route[]){
        this.app=express();
        this.port=process.env.POST || 5000;
        this.InitializeRoute(Routes);
        this.ConnecttoMongoDB();
    }
    // khoi tao route
    private InitializeRoute (routes:Route[])
    {
        routes.forEach((route)=>{
            this.app.use('/',route.route)
        })
    }
    public listen(){
        this.app.listen(this.port,()=>{
            console.log('SV lang nghe tai port' + this.port);
        });

    }
    private ConnecttoMongoDB(){
        try {
            var connectstring='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
            mongoose.connect(connectstring, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            });
            console.log('ket noi thanh cong');
        } catch (error) {
            console.log('khong ket noi duoc db');
        }
      

    }
}
export default App;