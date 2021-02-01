import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export default class registerDTO{
    constructor(
        fistName:string,
        lastName:string,
        email:string,
        password:string
      ) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
      }
    @IsNotEmpty()
    public fistName:string;
    @IsNotEmpty()
    public lastName:string;
    @IsNotEmpty()
    @IsEmail()
    public email:string;
    @IsNotEmpty()
    @MinLength(6)
    public password:string;
  
}