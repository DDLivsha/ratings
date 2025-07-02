import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from '@/assets/images/arrow.svg'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children: React.ReactNode
   appearance: 'primary' | 'ghost',
   arrow?: 'right' | 'down' | 'none'
}

export const Button: FC<Props> = ({ children, appearance = 'primary', className, arrow = 'none', ...props }) => {
   return (
      <button
         {...props}
         className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
         })}>
         {children}
         {arrow !== 'none' && <span className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
         })}
         ><ArrowIcon /></span>}
      </button>
   )
}