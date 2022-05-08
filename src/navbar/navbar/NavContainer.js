import Account from './Account'
import Cart from './Cart'
import Search from './Search'
import style from './navbar.module.scss'
import clsx from 'clsx'

export default function NavContainer() {
  return (
    <div className={clsx(style.navbarContainer)}>
      <Search />
      <img className={clsx(style.imgNavbar)} src={process.env.PUBLIC_URL + './navbar/img1.jpg'} />
      <div className={clsx(style.accountCart)}>
        <Account />
        <Cart />
      </div>
    </div>
  )
}
