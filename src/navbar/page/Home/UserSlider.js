import clsx from 'clsx'
import { Link } from 'react-router-dom'
import style from './home.module.scss'


export default function UserSlider() {
  return (
    <div className={clsx(style.userSlider, 'grid', 'wide')}>
      <div className={clsx(style.userList, 'row')}>
        {Array.from({ length: 2 }).map((item, index) => (
          <div className={clsx(style.userItem, 'col', 'l-6')} key={index}>
            <img className={clsx(style.userImg)} src={process.env.PUBLIC_URL + `/userSlider/img${index + 1}.jpg`} />
            <Link className={clsx(style.userCollectionShop)} to = '/product'>shop the collection</Link>
          </div>
        ))}
      </div>
      <div className={clsx(style.userList, 'row')}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div className={clsx(style.userItem, 'col', 'l-4')} key={index + 2}>
            <img className={clsx(style.userImg)} src={process.env.PUBLIC_URL + `/userSlider/img${index + 3}.jpg`} />
            <Link className={clsx(style.userCollectionShop)} to = '/product'>shop the collection</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
