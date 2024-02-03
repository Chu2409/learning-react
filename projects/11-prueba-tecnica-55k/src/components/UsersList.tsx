import { SortBy, type User } from '../types.d'

interface Props {
  changeSort: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList({ changeSort, deleteUser, showColors, users }: Props) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th >Foto</th>
          <th onClick={() => { changeSort(SortBy.NAME) }}>Nombre</th>
          <th onClick={() => { changeSort(SortBy.LAST) }}>Apellido</th>
          <th onClick={() => { changeSort(SortBy.COUNTRY) }}>País</th>
          <th >Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          users.map((user, index) => {
            const backgroundColor = index % 2 === 0 ? 'lightgray' : 'white'
            const color = showColors ? backgroundColor : 'transparent'

            return (
              <tr key={user.email} style={{ backgroundColor: color }}>
                <td>
                  <img src={user.picture.thumbnail} alt="" />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                  {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
                <td>
                  <button onClick={() => { deleteUser(user.email) }}>Eliminar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
