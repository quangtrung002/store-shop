import clsx from 'clsx'
import style from "./page.module.scss"
import { Link } from 'react-router-dom'
import { dataPage } from '../../data'

export default function Page() {
  return (
    <div className={clsx(style.page)}>
        <ul className={clsx(style.pageList)}>
          {dataPage.map((item, index) => (
            <li className={clsx(style.pageItem)} key={index}><Link to={index === 0 ? `/` : `/${item}`} >{item}</Link></li>
          ))}
        </ul>
      </div>
  )
}
