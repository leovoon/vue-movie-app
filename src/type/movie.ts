export interface GenreList {
  key: string
  value: string
}

export interface DirectorList {
  id: string
  name: string
}

export interface StarList {
  id: string
  name: string
}

export interface Item {
  id: string
  title: string
  fullTitle: string
  year: string
  releaseState: string
  image: string
  runtimeMins: string
  runtimeStr: string
  plot: string
  contentRating: string
  imDbRating: string
  imDbRatingCount: string
  metacriticRating: string
  genres: string
  genreList: GenreList[]
  directors: string
  directorList: DirectorList[]
  stars: string
  starList: StarList[]
}

export interface BoxOfficeItem {
  id: string
  rank: string
  title: string
  image: string
  weekend: string
  gross: string
  weeks: string
}

export interface BoxOfficeMovies {
  items: BoxOfficeItem[]
  errorMessage: string
}

export interface MovieObject {
  items: Item[]
  errorMessage: string
}
export interface Result {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}

export interface SearchMovieResult{
  searchType: string
  expression: string
  results: Result[]
  errorMessage: string
}
