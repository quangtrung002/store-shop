import React from 'react'
import clsx from "clsx";
import style from './footer.module.scss'


export default function FooterItem({ title, data }) {
  return (
    <>
      <h1 className={clsx(style.footerTitle)}>{title}</h1>
      <ul className={clsx(style.footerList)}>
        {data.map((item,index)=>(
          <li className={clsx(style.footerItem)} key = {index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
