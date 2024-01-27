import { useEffect } from 'react'

const SearchPage = ({ routeParams }) => {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <div>
      <h1>Has buscado {routeParams.query}</h1>
    </div>
  )
}

export default SearchPage
