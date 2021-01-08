


import { Route } from "core/interface";
import { Router } from "express";
import IndexController from "./index.controller";

export default class IndexRoute implements Route{
    path='/';
    route=Router();
    public IndexController=new IndexController();
    constructor(){
this.InitializeRoute();
    }
    private InitializeRoute(){
        //  gọi get('/') chạy function index 
        this.route.get(this.path,this.IndexController.index)
    }
}