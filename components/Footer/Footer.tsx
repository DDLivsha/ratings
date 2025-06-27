import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Footer.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Footer: FC<Props> = ({ className, ...props }) => {
   return (
      <div {...props}>
         Footer
      </div>
   )
}

export default Footer