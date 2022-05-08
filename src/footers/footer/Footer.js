import React from 'react'
import clsx from "clsx";
import style from './footer.module.scss'
import FooterItem from './FooterItem';
import { dataAccount } from '../../data';

export default function Footer() {
  return (
    <div className={clsx(style.footer)}>
      <div className='grid wide'>
        <ul className={clsx(style.footerLists, 'row')}>
          <li className={clsx(style.footerItems, 'col l-3')}><FooterItem title={"my acccount"} data={dataAccount} /></li>
          <li className={clsx(style.footerItems, 'col l-3')}><FooterItem title={"information"} data={dataAccount} /></li>
          <li className={clsx(style.footerItems, 'col l-3')}><FooterItem title={"customer service"} data={dataAccount} /></li>
          <li className={clsx(style.footerItems, 'col l-3')}><FooterItem title={"store information"} data={dataAccount} /></li>
        </ul>
      </div>
    </div>
  )
}
