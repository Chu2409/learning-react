export const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <h3>{movie.year}</h3>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

export const NoMoviesResult = () => {
  return (
    <p>No se encontraron peliculas para esta busqueda</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResult />)
}
