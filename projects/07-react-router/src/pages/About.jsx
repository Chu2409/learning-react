import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Nosotros',
    description: 'Hola! Me llamo Daniel Zhu y estoy creando un clon de React Router.',
    button: 'Inicio'
  },
  en: {
    title: 'About',
    description: 'Hi! My name is Daniel Zhu and I am creating a React Router clone.',
    button: 'Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

const AboutPage = ({ routeParams }) => {
  const i18n = useI18n(routeParams.lang)

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1540823852611211265/Zj8BhBXy_400x400.jpg' alt='Foto Daniel Zhu' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}

export default AboutPage
