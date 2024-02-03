import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import { UsersList } from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const originalUsers = useRef<User[]>([])

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter(user => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry !== ''
      ? users.filter(user => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
      : users
  }, [filterCountry, users])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    }
    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) =>
        a.name.first.localeCompare(b.name.first)
      )
    }
    if (sorting === SortBy.LAST) {
      return filteredUsers.toSorted((a, b) =>
        a.name.last.localeCompare(b.name.last)
      )
    }

    return filteredUsers
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors}>
          Colorear filas
        </button>

        <button onClick={toggleSortByCountry}>
          Ordernar por país
        </button>

        <button onClick={handleReset}>
          Reset usuarios
        </button>

        <input placeholder='Filtra por país' onChange={(e) => {
          setFilterCountry(e.target.value)
        }} />
      </header>
      <main>
        <UsersList changeSort={handleChangeSort} deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </>
  )
}

export default App
