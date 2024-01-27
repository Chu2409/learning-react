import { Link } from '../Link.jsx'

const Page404 = () => {
  return (
    <>
      <div>
        <h1>This is not fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif de perro This is fine quemandose' />
      </div>

      <Link to='/'>Home</Link>
    </>
  )
}

export default Page404
