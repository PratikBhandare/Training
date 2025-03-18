import { AppDataSource } from "../config/database";
import { Movie } from "../Entities/Movie";

const movieRepository= AppDataSource.getTreeRepository(Movie);

class MovieServiece{

    async addMovie(m:any){

        const movie=movieRepository.create({
            id:m.id,
            title:m.title,
            gnnre:m.gnnre,
            releaseYear:m.releaseYear,
            rating:m.rating
        })
        
        movieRepository.save(movie);

    }

    async showAll(){
        const movie = await movieRepository.find();
        return movie;
        

    }

    async deletById(id:number){
        await movieRepository.delete(id);


    }
    async updateById(id:number,data:any){
        await movieRepository.update(id,data);


    }
}

export=new MovieServiece();