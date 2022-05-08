import style from './product.module.scss'
import clsx from "clsx"
import {  useState, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import Loading from "../../../Loading"
import { ThemeContext } from '../../../App'


export default function Item() {
  const [heart, setHeart] = useState(false)
  const [data, cart, setCart] = useContext(ThemeContext)
  const handleHeart = () => setHeart(!heart)
  const handleCart = item => setCart([...cart, item])
  if (data === null) {
    return (<Loading />)
  }
  return (
    <div className={clsx(style.products, 'grid', 'wide')}>
      <h1 className={clsx(style.heading)}>all product</h1>
      <div className={clsx(style.productList, 'row')}>
        {data.map((item, index) => (
          <div className={clsx(style.product, 'col', 'l-4')} key={item.id}>
            <img className={clsx(style.img)} src={item.image} />
            <div className={clsx(style.titlePrice)}>
              <h3 className={clsx(style.title)} >{item.title}</h3>
              <p className={clsx(style.price)} >${item.price}</p>
            </div>
            <div className={clsx(style.description)}>
              <div className={clsx(style.reviews)}>
                {Array.from({ length: 5 }).map((item, index) => (
                  <i><FontAwesomeIcon icon={faStar} className={clsx(style.iconStar)} key={index} /></i>
                ))}
                <span className={clsx(style.titleReview)}>no review</span>
              </div>
              <div className={clsx(style.addToCart)}>
                <button
                  className={clsx(style.btnAddToCart)}
                  onClick = {()=>{ handleCart(item)}}
                >
                  add to cart
                </button>
                <i>
                  <FontAwesomeIcon icon={faEye} className={clsx(style.iconEye)} />
                </i>
                <i onClick={handleHeart}>
                  <FontAwesomeIcon icon={faHeart}
                    className={clsx(style.iconHeart, { [style.iconHeartActice]: heart })} />
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

