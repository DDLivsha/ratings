import React, { FC, JSX } from 'react'
import styles from './Menu.module.css'
import cn from 'classnames'
import { MenuItem, PageItem } from '@/interfaces/menu'
import { getMenu } from '@/api/get-menu'
import { TopLevelCategory } from '@/interfaces/top-page'
import CoursesIcon from '@/assets/images/sidebar/courses.svg'
import BooksIcon from '@/assets/images/sidebar/books.svg'
import ServicesIcon from '@/assets/images/sidebar/services.svg'
import ProductsIcon from '@/assets/images/sidebar/products.svg'

interface firstLevelMenuItem {
   route: string;
   name: string;
   icon: JSX.Element;
   id: TopLevelCategory;
}

const firstLevelMenu: firstLevelMenuItem[] = [
   {
      route: 'courses',
      name: 'Курси',
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses
   },
   {
      route: 'services',
      name: 'Послуги',
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services
   },
   {
      route: 'books',
      name: 'Книги',
      icon: <BooksIcon />,
      id: TopLevelCategory.Books
   },
   {
      route: 'products',
      name: 'Продукти',
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products
   }
]

const Menu: FC = async () => {

   const menu: MenuItem[] = await getMenu(0);

   const buildFirstLevel = () => {
      return (
         <>
            {firstLevelMenu.map((item) => (
               <div key={item.route}>
                  <a href={`/${item.route}`}>
                     <div className={cn(styles.firstLevel, {
                        [styles.firstLevelActive]: item.id == TopLevelCategory.Courses
                     })}>
                        {item.icon}
                        <span>{item.name}</span>
                     </div>
                  </a>
                  {item.id == TopLevelCategory.Courses && buildSecondLevel(item)}
               </div>
            ))}
         </>
      )
   }

   const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
      return (
         <div className={styles.secondBlock}>
            {
               menu.map((m) => (
                  <div key={m._id.secondCategory}>
                     <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                     <div className={cn(styles.secondLevelBlock, {
                        [styles.secondLevelBlockOpened]: m.isOpened
                     })}>
                        {buildThirdLevel(m.pages, menuItem.route)}
                     </div>
                  </div>
               ))
            }
         </div>
      )
   }

   const buildThirdLevel = (pages: PageItem[], route: string) => {
      return (
         pages.map(p => (
            <a key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
               [styles.thirdLevelActive]: false
            })}>
               {p.category}
            </a>
         ))
      )
   }

   return (
      <div className={styles.menu}>
         {buildFirstLevel()}
      </div>
   )
}

export default Menu