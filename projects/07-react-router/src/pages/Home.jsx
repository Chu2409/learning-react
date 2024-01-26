import { Link } from '../Link'

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Nosotros</Link>
    </>
  )
}

export default HomePage
