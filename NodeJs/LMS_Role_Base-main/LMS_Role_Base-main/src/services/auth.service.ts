import authRepository from "../reposiotry/auth.repository";

class authService{
  async login(data:any){
    return await authRepository.login(data);
    }

    async registerBLL(data: any) {
        return await authRepository.register(data);
    }

}


export default new authService();