import React, { useContext, useEffect, useState } from 'react'
import style from './cart.module.scss'
import clsx from 'clsx'
import CartInfor from './CartInfor'
import CartItem from './CartItem'
import { ThemeContext } from '../../../App'

export default function Cart() {
  const [data, cart, setCart] = useContext(ThemeContext)
  const [priceTotal, setPriceTotal] = useState(0)
  useEffect(() => {
    setPriceTotal(cart.reduce((prevItem, currentItem) => {
      return prevItem + currentItem.price
    }, 0))
  }, [cart])
  return (
    <div className={clsx(style.cartMain, 'grid', 'wide')}>
      <h1 className={clsx(style.heading)}>check out</h1>
      <div className={clsx(style.cart, 'grid', 'wide')}>
        <CartInfor />
        <CartItem />
      </div>
      <div className={clsx(style.cartTotal)}>
        <h3 className={clsx(style.cartTotal)}>cart totals</h3>
        <p className={clsx(style.cartSubTotal)}>cart subtotal: <span className={clsx(style.cartMoney)}>${priceTotal}</span></p>
        <button className={clsx(style.cartBtn)}>proceed to checkout</button>
      </div>
    </div>
  )
}
