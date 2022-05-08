import React from 'react'
import clsx from "clsx"
import style from './product.module.scss'
import Collection from './Collection'
import Color from './Color'
import PopularTag from './PopularTag'
import Item from './Item'
import Form from './Form'

export default function Product() {
  return (
    <div className={clsx(style.productMain, 'grid', 'wide')}>
      <div className={clsx(style.navbar)}>
        <Collection />
        <Color />
        <PopularTag />
        <img className={clsx(style.navbarImg)} src={process.env.PUBLIC_URL + '/product/img2.jpg'} alt='Error' />
      </div>
      <div className={clsx(style.item)}>
        <img className={clsx(style.itemImg)} src={process.env.PUBLIC_URL + '/product/img1.jpg'} alt="Error" />
        <Form />
        <Item />
      </div>
    </div>
  )
}
