import React, { DetailedHTMLProps, FC, forwardRef, TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.css'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
   error?: FieldError
}

const Textarea: FC<Props> = forwardRef(({ className, error, ...props }, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
   return (
      <div className={cn(styles.textareaWrapper, className)}>
         <textarea ref={ref} {...props} className={cn(styles.textarea, { [styles.error]: error })} />
         {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
   )
})

export default Textarea