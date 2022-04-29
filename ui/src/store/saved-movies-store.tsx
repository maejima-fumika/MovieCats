import { makeAutoObservable } from "mobx"

export default class SavedMoviesStore {
    savedMovies:string[] = []
    constructor(){
        makeAutoObservable(this)
        const localSavedMovies = localStorage.savedMovies
        if (!localSavedMovies || !JSON.parse(localSavedMovies)) {
          this.savedMovies = []
        }else{
          this.savedMovies = JSON.parse(localSavedMovies)
        }
    }

    appendMovieToSavedMovies(movieId:string){
        this.savedMovies.push(movieId)
        localStorage.savedMovies = JSON.stringify(this.savedMovies)
    }
  
    removeMovieFromSavedMovies(movieId:string){
        this.savedMovies = this.savedMovies.filter(mi=>mi != movieId)
        localStorage.savedMovies = JSON.stringify(this.savedMovies)
    }

    checkMovieExists(movieId:string){
        return this.savedMovies.includes(movieId)
    }
}