import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './component/movieCard' // Import the MovieCard component

const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjhmMmRiMTkyYWQxMWQwZWRmOGIzMjNjNjQ5MDE0ZCIsIm5iZiI6MTc1MjU4NzYwNC41NjksInN1YiI6IjY4NzY1ZDU0ZGYzYTlkM2Y5MjYzNzRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dBhbssvT4hNFb5W5TQyKUSIkgSkXbEDe6PYZYIx1o5c'
  }
}

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = async () => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)

      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json()
      
      // TMDB API returns results directly, no need to check Response field
      setMovieList(data.results || [])
    } catch (error) {
      console.error(error)
      setErrorMessage('Error fetching movies, please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <div className='hero-container'>
        <h1>Unlimited movies<br />
          To Enjoy with your friends</h1>
      </div>

      <div className='all-movies'>
        <h2>All movies</h2>
        {isLoading ? (
          <p className='text-white'>Loading...</p>
        ) : errorMessage ? (
          <p className='text-red-500'>{errorMessage}</p>
        ) : (
          <div className='movies-grid'>
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default App