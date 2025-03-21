import { userRepository } from "../repositories/userRepository";
import { profileRepository } from "../repositories/profileRepository";
import { User_J3 } from "../entities/user.entity";

export class RegisterService {
    static async registerUser(name: string, email: string, bio:any) {
        try {
            let newUser = new User_J3();
            const profileId:any = {bio:bio}
            newUser.email =email;
            newUser.name = name;
            newUser.profile = profileId;

            console.log(newUser);
            

            console.log("User before save:", newUser);

            await userRepository.save(newUser);
        } catch (err:any) {
            console.log("Error from service:",err.message);
            return err;
        }
    }
}