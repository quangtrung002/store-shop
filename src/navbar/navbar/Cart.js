import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import style from './navbar.module.scss'
import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../App'

export default function () {
  const [amount, setAmount] = useState(0)
  const [data, cart] = useContext(ThemeContext)
  useEffect(() => {
    setAmount(cart.length)
  }, [cart])
  return (
    <div className={clsx(style.shop)}>
      <div className={clsx(style.cart)}>
        <FontAwesomeIcon className={clsx(style.cartIcon)} icon={faCartShopping} />
        <p className={clsx(style.cartName)}>shopping cart</p>
        <div className={clsx(style.shopCart)}>
          {amount !== 0
            ? (<>
              <h1 className={clsx(style.cartHeading)}>sản phẩm vừa thêm</h1>
              <div className={clsx(style.cartList)}>
                {cart.map((item, index) => (
                  <div className={clsx(style.cartItem)} key={item.id}>
                    <img src={item.image} className={clsx(style.itemImg)} />
                    <p className={clsx(style.itemDes)}>{item.description}</p>
                    <span className={clsx(style.itemPrice)}>${item.price}</span>
                  </div>))}
              </div>
            </>)
            : (
              <p className={clsx(style.cartDes)}>not cart</p>
            )}
          <button className={clsx(style.cartBtn)}>
            <Link to='/cart' className={clsx(style.cartBtnLink)}>go cart</Link>
          </button>
        </div>
      </div>
      <div className={clsx(style.cartAmount)}>{amount}</div>
    </div>
  )
}
