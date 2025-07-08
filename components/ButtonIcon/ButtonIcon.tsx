import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './ButtonIcon.module.css'
import cn from 'classnames'
import up from '@/assets/images/up.svg'
import close from '@/assets/images/burger-close.svg'
import menu from '@/assets/images/burger.svg'

export const icons = {
   menu,
   close,
   up
}
export type IconName = keyof typeof icons

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   appearance: 'primary' | 'white',
   icon: IconName
}

export const ButtonIcon: FC<Props> = ({ appearance, className, icon, ...props }) => {

   const IconComponent = icons[icon]

   return (

      <button
         {...props}
         className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white'
         })}>
         <IconComponent />
      </button>
   )
}