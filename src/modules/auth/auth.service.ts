import { HttpException } from '@core/exceptions';
import { isEmtryObject } from '@core/utils';
import { IUser, DataStoredInToken, DataToken} from '@modules/auth';
import UserSchema from '@modules/users/users.model';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import AuthDTO from './auth.dto';
class AuthService{
    public UserSchema=UserSchema;
    public async Login(model:AuthDTO): Promise<DataToken>{
        if(isEmtryObject(model)){
            throw new HttpException(400,'model is emtry');
        };
        const user= await this.UserSchema.findOne({email:model.email});
        if (!user){
            throw new HttpException(409,'email khong ton tai');
        };
        const isMathchPassword=await bcryptjs.compare(model.password,user.password);
        if(!isMathchPassword) {
            throw new HttpException(400,'credential is not valid');
        }
 
            return this.createToken(user);
        
    
    }
    
  private createToken(user: IUser): DataToken{
    const dataInToken: DataStoredInToken = {id: user._id};
    const secret: string = process.env.JWT_TOKEN_SECRET!;
    const expiresIn: number = 60;
    return {
        token: jsonwebtoken.sign(dataInToken,secret,{expiresIn:expiresIn})
    }
}
}
export default AuthService;