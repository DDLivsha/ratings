import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import Menu from '../Menu/Menu'
import Logo from '@/assets/images/logo.svg'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Sidebar: FC<Props> = ({className, ...props }) => {
   return (
      <div {...props} className={cn(styles.sidebar, className)}>
         <Logo className={styles.logo} />
         <div>Search</div>
         <Menu />
      </div>
   )
}

export default Sidebar