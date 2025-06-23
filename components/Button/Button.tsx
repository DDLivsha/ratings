import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children: React.ReactNode
   appearance: 'primary' | 'ghost',
   className?: string
}

export const Button: FC<Props> = ({ children, appearance, className, ...props }) => {
   return (
      <button
         {...props}
         className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
         })}>
         {children}
      </button>
   )
}