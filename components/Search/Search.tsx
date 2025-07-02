'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Search.module.css'
import cn from 'classnames'
import Input from '../Input/Input'
import { Button } from '../Button/Button'
import SearchIcon from '@/assets/images/search.svg'
import { useRouter } from 'next/navigation'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
const Search: FC<Props> = ({ className, ...props }) => {

   const [search, setSearch] = React.useState('')
   const router = useRouter()

   return (
      <div {...props} className={cn(styles.search, className)}>
         <Input
            className={styles.input}
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && router.push(`/search?q=${search}`)}
         />
         <Button
            appearance='primary'
            className={styles.button}
            onClick={() => router.push(`/search?q=${search}`)}
         ><SearchIcon /></Button>
      </div>
   )
}

export default Search