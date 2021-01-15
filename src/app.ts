
var hpp = require('hpp');
const helmet = require("helmet");
var morgan = require('morgan')
var cors = require('cors')


import { Route } from './core/interface';
import { Logger } from './core/utils';
import express, { Router } from 'express';
import mongoose from 'mongoose'
class App{
    
    // khoi tao app
    public app: express.Application;
    public port:string|number;
    public production:boolean;
    constructor(Routes:Route[]){
        this.app=express();
        this.port=process.env.POST || 5000;
        this.production=process.env.NODE_ENV=="production" ? true : false;
        this.InitializeRoute(Routes);
        this.ConnecttoMongoDB();
        this.InitializeMiddware();
    }
    // khoi tao route
    private InitializeRoute (routes:Route[])
    {
        routes.forEach((route)=>{
            this.app.use('/',route.route)
        })
    }
    private InitializeMiddware(){
        if (this.production){
            this.app.use(hpp());
            this.app.use(helmet());
            this.app.use(morgan('combined'));
            this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
        }
        else{
            this.app.use(morgan('dev'));
            this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
        }
    }
    public listen(){
        this.app.listen(this.port,()=>{
            Logger.info('SV lang nghe tai port' + this.port);
        });

    }
    private ConnecttoMongoDB(){
        
   
            
        const connectionstring=process.env.MONGODB_URI;
            if(!connectionstring){
                Logger.error("connectionstring is invalid");
        
                return;
            }
            mongoose.connect(connectionstring, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }).catch((reason)=>{
                Logger.error(reason)
            });
            Logger.info("ket noi thanh cong");
        
      
      

    }
}
export default App;