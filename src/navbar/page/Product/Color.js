import clsx from "clsx";
import style from './product.module.scss'
import { dataColor } from "../../../data";

export default function Color() {
  return (
    <div className={clsx(style.color)}>
      <h1 className={clsx(style.colorTitle)}>color</h1>
      <ul className={clsx(style.colorList)}>
        {dataColor.map((item, index) => (
          <li className={clsx(style.colorItem)} key = {index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
