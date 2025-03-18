
import moviesService from "../Services/movies.service"
class MovieController{
    async addMovie(req:Request,resp:any){
        let movie=req.body;
        console.log(movie);
        
        moviesService.addMovie(movie)
        resp.send("Done..!")

    }
    async showAll(req:Request,resp:any){
        let result=await moviesService.showAll();
        resp.send(result)
        

    }
    async deleteById(req:any,resp:any){
       
        await moviesService.deletById(req.params.id)
        resp.send("Deleted...")

    }
    async updateMoviebyID(req:any,resp:any){
        await moviesService.updateById(req.params.id,req.body)
        resp.send("Updated...")

    }
}

export=new MovieController();