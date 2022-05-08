import clsx from "clsx"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../App"
import style from './product.module.scss'


export default function Collection() {
  const [collection, setCollection] = useState(null)
  const [data] = useContext(ThemeContext)
  useEffect(() => {
    const filterCategory = data.map(item => item.category)
    setCollection([... new Set(filterCategory), 'all product'])
  }, [])
  return (
    <div className={clsx(style.collection)}>
      <h1 className={clsx(style.collectionTitle)}>collection</h1>
      <ul className={clsx(style.collectionList)}>
        {collection && collection.map((item, index) => (
          <li className={clsx(style.collectionItem)} key = {index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
