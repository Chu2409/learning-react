import './Footer.css'
import { useCart } from '../hooks/useCart'

export function Footer () {
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {
        JSON.stringify(cart)
      }
      {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
