import clsx from "clsx";
import { dataPopularTags } from "../../../data";
import style from './product.module.scss'

export default function PopularTag() {
  return (
    <div className={clsx(style.popular)}>
      <h1 className={clsx(style.popularTitle)}>popular</h1>
      <ul className={clsx(style.popularList)}>
        {dataPopularTags.map((item, index) => (
          <li className={clsx(style.popularItem)} key = {index}>
            <button className={clsx(style.popularButton)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
