import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const Textarea: FC<Props> = ({ className, ...props }) => {
   return (
      <textarea {...props} className={cn(styles.textarea, className)} />
   )
}

export default Textarea