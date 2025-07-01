import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Card.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: React.ReactNode,
   color?: 'white' | 'blue',
}
const Card: FC<Props> = ({ className, children, color = 'white', ...props }) => {
   return (
      <div className={cn(styles.card, className, {
         [styles.blue]: color === 'blue',
      })}
         {...props}
      >{children}
      </div>
   )
}

export default Card