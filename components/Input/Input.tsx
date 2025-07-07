import React, { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { 
   error?: FieldError
}

const Input: FC<Props> = forwardRef(({ className, error, ...props }, ref: React.ForwardedRef<HTMLInputElement>) => {
   return (
      <div className={styles.inputWrapper}>
      <input ref={ref} {...props} className={cn(styles.input, className, { [styles.error]: error })} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
   )
})

export default Input