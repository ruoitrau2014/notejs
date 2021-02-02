import { DataToken } from "@modules/auth";
import { NextFunction, Request, Response } from "express";
import AuthDTO from "./auth.dto";
import AuthService from "./auth.service";



export default class AuthController{
    private AuthService= new AuthService();
public login=async (req:Request, res:Response,next:NextFunction)=>{
  
 try
 {
     const model:AuthDTO=req.body;
     const DataToken:DataToken=await this.AuthService.Login(model);
        res.status(200).json(DataToken);
 }
 catch (error)
 {
    next(error);
 }

}

}