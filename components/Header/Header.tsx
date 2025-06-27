import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Header.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Header: FC<Props> = ({ className, ...props }) => {
   return (
      <div {...props}>
         Header
      </div>
   )
}

export default Header