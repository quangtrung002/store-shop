
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import style from './navbar.module.scss'
import clsx from 'clsx'
import { dataAccount } from '../../data'


export default function Account() {
  return (
    <div className={clsx(style.account)}>
      <div className={clsx(style.accLink)}>
        <FontAwesomeIcon className={clsx(style.accIcon)} icon={faKey} />
        <a className={clsx(style.accTitle)}>account</a>
      </div>
      <div className={clsx(style.accContainer)}>
        <p className={clsx(style.accSetting)}>setting</p>
        <ul className={clsx(style.accList)}>
          {dataAccount.map((item, index) => (
            <li className={clsx(style.accItem)} key = {index} >{item}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}
