import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Tag.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: React.ReactNode
   size?: 's' | 'm' 
   color: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
   href?: string
}

export const Tag: FC<Props> = ({ size = 's', children, color = 'ghost', className, href, ...props }) => {
   return (
      <div
         {...props}
         className={cn(styles.tag, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.gray]: color === 'gray',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
         })}>{href ? <a href={href}>{children}</a> : children}</div>
   )
}