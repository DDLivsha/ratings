import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Typography.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   children: React.ReactNode,
   size: 's' | 'm' | 'l'
}
const Typography: FC<Props> = ({ className, children, size = 'm', ...props }) => {
   return (
      <p
         className={cn(styles.p, className,
            {
               [styles.s]: size === 's',
               [styles.m]: size === 'm',
               [styles.l]: size === 'l'
            }
         )}
         {...props}
      >{children}</p>
   )
}

export default Typography