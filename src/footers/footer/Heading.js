import clsx from "clsx";
import style from './footer.module.scss'

export default function Heading() {
  return (
    <div className={clsx(style.heading)}>
      <h4 className={clsx(style.title)}>newsletter</h4>
      <p className={clsx(style.paragh)}>Get the latest new and special offers</p>
      <div>
        <form className={clsx(style.form)}>
          <input className={clsx(style.email)} type="text" placeholder='email@gmail.com' />
          <input className={clsx(style.submit)} type="submit" value="sign up" />
        </form>
      </div>
    </div>
  )
}
