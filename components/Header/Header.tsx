'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Header.module.css'
import cn from 'classnames'
import Logo from '@/assets/images/logo.svg'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import Sidebar from '../Sidebar/Sidebar'
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Header: FC<Props> = ({ className, ...props }) => {

   const [isOpen, setIsOpen] = React.useState(false)

   const variants = {
      visible: {
         opacity: 1,
         x: 0,
         transition: {
            stifness: 20
         }
      },
      hidden: {
         opacity: 0,
         x: '-100%',
      }
   }

   const pathname = usePathname()

   React.useEffect(() => {
      setIsOpen(false)
   }, [pathname])

   return (
      <header {...props} className={cn(styles.header, className)}>
         <Logo />
         <ButtonIcon icon='menu' appearance='white' onClick={() => setIsOpen(true)} />
         <motion.div
            className={styles.mobileMenu}
            animate={isOpen ? 'visible' : 'hidden'}
            initial='hidden'
            variants={variants}
         >
            <Sidebar />
            <ButtonIcon className={styles.menuClose} icon='close' appearance='white' onClick={() => setIsOpen(false)} />
         </motion.div>
      </header>
   )
}

export default Header