import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Divider.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}
const Divider: FC<Props> = ({ className, ...props }) => {
   return (
      <hr className={cn(styles.hr, className)} {...props} />
   )
}

export default Divider