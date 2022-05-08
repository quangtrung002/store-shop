import clsx from "clsx"
import style from './product.module.scss'

export default function Form() {
  return (
    <form className={clsx(style.form)}>
      <label className={clsx(style.formLabel)}>sort by</label>
      <select className={clsx(style.formSelect)}>
        <option className={clsx(style.formOption)} value='Date, old to new'>Date, old to new</option>
        <option className={clsx(style.formOption)} value='Date, new to old'>Date, new to old</option>
        <option className={clsx(style.formOption)} value='Price, hight to low'>Price, hight to low</option>
        <option className={clsx(style.formOption)} value='Price, low to hight'>Price, low to hight</option>
      </select>
    </form>
  )
}
