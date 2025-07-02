import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: FC<Props> = ({ className, ...props }) => {
   return (
      <input {...props} className={cn(styles.input, className)} />
   )
}

export default Input