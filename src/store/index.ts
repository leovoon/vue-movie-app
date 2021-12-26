import { defineStore } from 'pinia'
import type MovieObject from '~/type/movie'
import MovieService from '~/services/Movies'

export interface Item {
  id: string
  rank: string
  title: string
  image: string
  weekend: string
  gross: string
  weeks: string
}

export interface BoxOfficeMovies {
  items: Item[]
  errorMessage: string
}

export const useMovie = defineStore('movieStore', {
  state() {
    return {
      inTheatersData: {
        movies: undefined as MovieObject | undefined,
        isLoading: false,
        error: null as string | null,
      },
      comingSoonData: {
        movies: undefined as MovieObject | undefined,
        isLoading: false,
        error: null as string | null,
      },
      boxOfficeData: {
        movies: undefined as BoxOfficeMovies | undefined,
        isLoading: false,
        error: null as string | null,
      },

    }
  },
  getters: {
    movieUrl: () => (imdbID: string) => `https://www.imdb.com/title/${imdbID}`,
  },
  actions: {
    async setInTheaters() {
      this.inTheatersData.isLoading = true
      this.inTheatersData.error = null
      try {
        this.inTheatersData.movies = await MovieService.getInTheaters()
      }
      catch (error: any) {
        if (error)
          this.inTheatersData.error = error
      }
      this.inTheatersData.isLoading = false
    },
    async setComingSoon() {
      this.comingSoonData.isLoading = true
      this.comingSoonData.error = null
      try {
        this.comingSoonData.movies = await MovieService.getComingSoon()
      }
      catch (error: any) {
        if (error)
          this.comingSoonData.error = error
      }
      this.comingSoonData.isLoading = false
    },
    async setBoxOffice() {
      this.boxOfficeData.isLoading = true
      this.boxOfficeData.error = null
      try {
        this.boxOfficeData.movies = await MovieService.getBoxOffice()
      }
      catch (error: any) {
        if (error)
          this.boxOfficeData.error = error
      }
      this.boxOfficeData.isLoading = false
    },
  },

})
