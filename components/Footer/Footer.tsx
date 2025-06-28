import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Footer.module.css'
import cn from 'classnames'
import { format } from 'date-fns'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Footer: FC<Props> = ({ className, ...props }) => {
   return (
      <footer className={cn(styles.footer, className)} {...props}>
         <p>OWLTOP © 2020-{format(new Date(), 'yyyy')} All rights reserved</p>
         <a href='#' target='_blank'>User agreement</a>
         <a href='#' target='_blank'>Privacy Policy</a>
      </footer>
   )
}

export default Footer