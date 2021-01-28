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
    public fistName:string;
    public lastName:string;
    public email:string;
    public password:string;
  
}