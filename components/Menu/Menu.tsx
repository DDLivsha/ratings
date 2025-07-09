'use client'
import React, { FC, JSX } from 'react'
import styles from './Menu.module.css'
import cn from 'classnames'
import { MenuItem, PageItem } from '@/interfaces/menu'
import { getMenu } from '@/api/get-menu'
import { TopLevelCategory } from '@/interfaces/top-page'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { firstLevelMenu, firstLevelMenuItem } from '@/helpers/helpers'
import { motion } from 'framer-motion'



const Menu: FC = () => {
   const pathname = usePathname();
   const firstCategoryItem = firstLevelMenu.find((item) => item.route == pathname.split('/')[1])

   const [menu, setMenu] = React.useState<MenuItem[]>([])

   const variants = {
      visible: {
         marginBottom: 20,
         transition: {
            when: "afterChildren",
            staggerChildren: 0.1
         }
      },
      hidden: {
         marginBottom: 0
      }
   }

   const variantsChildren = {
      visible: {
         opacity: 1,
         height: 29
      },
      hidden: {
         opacity: 0,
         height: 0
      }
   }

   React.useEffect(() => {
      async function loadMenu() {
         if (firstCategoryItem) {
            setMenu([])
            const menu = await getMenu(firstCategoryItem?.id)
            setMenu(menu)
         }
      }
      loadMenu()
   }, [firstCategoryItem?.id])

   const openSecondLevel = (secondCategory: string) => {
      setMenu(menu.map(m => {
         if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened
         }
         return m
      }))
   }

   const buildFirstLevel = () => {
      return (
         <>
            {firstLevelMenu.map((item) => (
               <div key={item.route}>
                  <Link href={`/${item.route}`}>
                     <div className={cn(styles.firstLevel, {
                        [styles.firstLevelActive]: item.id == firstCategoryItem?.id
                     })}>
                        {item.icon}
                        <span>{item.name}</span>
                     </div>
                  </Link>
                  {item.id == firstCategoryItem?.id && buildSecondLevel(item)}
               </div>
            ))}
         </>
      )
   }

   const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
      return (
         <div className={styles.secondBlock}>
            {
               menu.map((m) => {
                  if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
                     m.isOpened = true
                  }
                  return (
                     <div key={m._id.secondCategory}>
                        <div
                           tabIndex={0}
                           onKeyDown={(key) => key.code == 'Enter' && openSecondLevel(m._id.secondCategory)}
                           className={styles.secondLevel}
                           onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                        <motion.div
                           layout
                           variants={variants}
                           initial={m.isOpened ? 'visible' : 'hidden'}
                           animate={m.isOpened ? 'visible' : 'hidden'}
                           className={cn(styles.secondLevelBlock)}>
                           {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                        </motion.div>
                     </div>
                  )
               })
            }
         </div>
      )
   }

   const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
      return (
         pages.map(p => (
            <motion.div
               key={p._id}
               variants={variantsChildren}
            >
               <Link
                  tabIndex={isOpened ? 0 : -1}
                  href={`/${route}/${p.alias}`}
                  className={cn(styles.thirdLevel, {
                     [styles.thirdLevelActive]: pathname === `/${route}/${p.alias}`
                  })}>
                  {p.category}
               </Link>
            </motion.div>
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