"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const userRepository_1 = require("../repositories/userRepository");
const user_entity_1 = require("../entities/user.entity");
class RegisterService {
    static registerUser(name, email, bio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newUser = new user_entity_1.User_J3();
                const profileId = { bio: bio };
                newUser.email = email;
                newUser.name = name;
                newUser.profile = profileId;
                console.log(newUser);
                console.log("User before save:", newUser);
                yield userRepository_1.userRepository.save(newUser);
            }
            catch (err) {
                console.log("Error from service:", err.message);
                return err;
            }
        });
    }
}
exports.RegisterService = RegisterService;
