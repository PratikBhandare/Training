import { pool } from "../config/pool";
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from 'bcryptjs';
class authRepository{

    async login(data:any){
        try {
            const {email, password,role} = data;
            const user = (await pool).request().input('email',email).query(`SELECT * FROM users WHERE email = @email`);
            if((await user).recordset.length === 0){
                return {status: 404, message: "User not found"};
            }
            const originalpassword = (await user).recordset[0].password;
            if(bcrypt.compareSync(password,originalpassword) === false){
                return {status: 400, message: "Password incorrect"};
            }
            const token = jwt.sign({email: email,role:role},process.env.TOKEN_SECRET as string,{expiresIn: '1h'});
            return {status: 200, token: token};

        } catch (error) {
            return {status: 500, message: error};
        }
    }

    async register(data:any){
        try {
            const  {email, password,role,name} = data;
            const user = (await pool).request().input('email',email).query(`SELECT * FROM users WHERE email = @email`);
            if((await user).recordset.length > 0){
                return {status: 400, message: "User already exists"};
            }
            const salt = bcrypt.genSaltSync(5);
            const hashedPassword = bcrypt.hashSync(password,salt);
            const newUser = (await pool).request().input('name',name).input('email',email).input('password',hashedPassword).input('role',role).query(`INSERT INTO users (name,email,password,role) VALUES (@name,@email,@password,@role)`);
            return {status: 200, message: "User created"};
        } catch (error) {
            return {status: 500, message: error};
    }
    }
}
export default new authRepository();
