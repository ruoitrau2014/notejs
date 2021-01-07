

import { Route } from 'core/interface';
import express, { Router } from 'express';
class App{
    public app: express.Application;
    public port:string|number;
    constructor(Routes:Route[]){
        this.app=express();
        this.port=process.env.POST || 5000;
        this.InitializeRoute(Routes);
    }
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
}
export default App;