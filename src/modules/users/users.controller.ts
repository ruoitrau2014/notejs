import { DataToken } from "@modules/auth";
import { NextFunction, Request, Response } from "express";
import registerDTO from "./DTO/register.dto";
import UserService from "./users.service";

export default class UsersController{
    private UserService= new UserService();
public register=async (req:Request, res:Response,next:NextFunction)=>{
  
 try
 {
     const model:registerDTO=req.body;
     const DataToken:DataToken=await this.UserService.CreatedUser(model);
        res.status(201).json(DataToken);
 }
 catch (error)
 {
    next(error);
 }

}

}