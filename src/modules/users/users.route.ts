import { Route } from "@core/interface";
import validationMiddleware from "@core/middleware/validation.middleware";
import { Router } from "express";
import registerDTO from "./DTO/register.dto";
import UserController from "./users.controller";

export default class UsersRoute implements Route{
    path='/api/users/register';
    route=Router();
    public UserController=new UserController();
    constructor(){
this.InitializeRoute();
    }
    private InitializeRoute(){
        //  gọi get('/') chạy function index 
        this.route.post(this.path,validationMiddleware(registerDTO,true),this.UserController.register)}
}