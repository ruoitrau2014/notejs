import { HttpException } from '@core/exceptions';
import { isEmtryObject } from '@core/utils';
import { DataStoredInToken, DataToken } from '@modules/auth';
import registerDTO from './DTO/register.dto';
import UserSchema from './users.model';
import gravatar from 'gravatar';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import IUser from './users.interface';
class UserService{
    public UserSchema=UserSchema;
    public async CreatedUser(model:registerDTO): Promise<DataToken>{
        if(isEmtryObject(model)){
            throw new HttpException(400,'model is emtry');
        };
        const user= await this.UserSchema.findOne({email:model.email});
        if (user){
            throw new HttpException(409,'email da ton tai');
        };
        const avatar=gravatar.url(model.email!,{
            size:'200',
            rating:'h',
            default:'mm',
        });
        const salt= await bcryptjs.genSalt(10);
        const hashedPass=await bcryptjs.hash(model.password!,salt);
        const createdUser = await this.UserSchema.create({
            ...model,
            password: hashedPass,
            avatar: avatar,
            date: Date.now(),
          });
          return this.createToken(createdUser);
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
export default UserService;