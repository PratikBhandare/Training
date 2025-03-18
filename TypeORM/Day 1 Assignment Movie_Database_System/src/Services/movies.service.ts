import { AppDataSource } from "../config/database";
import { Movie } from "../Entities/Movie";
import MovieRepo from "../Repository/Movie.repo";
const movieRepository= AppDataSource.getTreeRepository(Movie);

class MovieServiece{

    async addMovie(m:any){

        await MovieRepo.addMovie(m);

    }

    async showAll(){
        return await MovieRepo.showAll();
        

    }

    async deletById(id:number){
        await MovieRepo.deletById(id);


    }
    async updateById(id:number,data:any){
        await MovieRepo.updateById(id,data);


    }
}

export=new MovieServiece();