import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import style from './navbar.module.scss'
import clsx from 'clsx'


export default function Search() {
  return (
    <div className={clsx(style.searchForm)}>
      <input className={clsx(style.inputForm)} placeholder='search out store' />
      <FontAwesomeIcon  className={clsx(style.iconForm)} icon={faMagnifyingGlass} />
    </div>
  )
}
