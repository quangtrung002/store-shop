import { useContext } from 'react'
import { ThemeContext } from '../../../App'
import style from './cart.module.scss'
import clsx from 'clsx'


export default function CartItem() {
  const [data, cart, setCart] = useContext(ThemeContext)
  const handleRemove = (id) => {
    setCart([...cart.filter((item, index) => index !== id)])
  }
  if (cart) {
    return (
      <>
        {cart.map((item, index) => (
          <ul className={clsx(style.cartItems, 'row')} key = {item.id}>
            <li className={clsx(style.cartItem, 'col', 'l-2')}>
              <img className={clsx(style.cartItemImg)} src={item.image} />
            </li>
            <li className={clsx(style.cartItem, style.cartItemTitle, 'col', 'l-2')}>{item.title}</li>
            <li className={clsx(style.cartItem, style.cartItemDes, 'col', 'l-4')}>{item.description}</li>
            <li className={clsx(style.cartItem, style.cartItemPrice, 'col', 'l-2')}>{item.price}</li>
            <li className={clsx(style.cartItem, 'col', 'l-2')}>
              <button className={clsx(style.cartItemRemove)} onClick={() => { handleRemove(index) }}>x</button>
            </li>
          </ul>
        ))}
      </>
    )
  }
}
