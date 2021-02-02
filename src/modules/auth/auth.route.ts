import { Route } from "@core/interface";
import { Router } from "express";
import AuthController from "./auth.controller";

export default class AuthRoute implements Route{
    path='/api/users/login';
    route=Router();
    public AuthController=new AuthController();
    constructor(){
this.InitializeRoute();
    }
    private InitializeRoute(){
        //  gọi get('/') chạy function index 
        this.route.post(this.path,this.AuthController.login)}
}