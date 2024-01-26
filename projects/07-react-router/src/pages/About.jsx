import { Link } from '../Link'

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1540823852611211265/Zj8BhBXy_400x400.jpg' alt='Foto Daniel Zhu' />
        <p>Hola! Me llamo Daniel Zhu y estoy creando un clon de React Router.</p>
      </div>
      <Link to='/'>Home</Link>
    </>
  )
}

export default AboutPage
