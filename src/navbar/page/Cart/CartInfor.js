import style from './cart.module.scss'
import clsx from 'clsx'

export default function CartInfor() {
  return (
    <ul className={clsx(style.cartInfor, 'row')}>
      <li className={clsx(style.cartInforItem,'col','l-2')}>image</li>
      <li className={clsx(style.cartInforItem,'col','l-2')}>name</li>
      <li className={clsx(style.cartInforItem,'col','l-4')}>description</li>
      <li className={clsx(style.cartInforItem,'col','l-2')}>price</li>
      <li className={clsx(style.cartInforItem,'col','l-2')}>remove</li>
    </ul>
  )
}
