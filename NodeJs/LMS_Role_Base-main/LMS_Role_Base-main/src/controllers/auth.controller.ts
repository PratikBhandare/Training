import authService from "../services/auth.service";
import { Request, Response } from "express";

class authController{
    
    async login(req:Request,res:Response){
        try {

            const data = req.body;
            const response = await authService.login(data);
            if(response.status !== 200){
                 res.status(500).json(response.message);
            }
            res.status(200).json(response.token);

        } catch (error) {
            console.log(error);
        }
    }

    async register(req:Request,res:Response){
        try {
            const data = req.body;
            const response = await authService.registerBLL(data);
            if(response.status !== 200){
                res.status(500).json(response.message);
            }
            res.status(200).json(response.message);
        } catch (error) {
            console.log(error);
        }
    }

}

export default new authController();