'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './SortWrapper.module.css'
import Sort, { SortEnum } from '../Sort/Sort'
import { ProductModel } from '@/interfaces/product'
import { sortReducer } from './sort.reducer'
import Product from '../Product/Product'

interface Props {
   products: ProductModel[]
}

const SortWrapper: FC<Props> = ({ products }) => {

   const [{ products: sortedProducts, sort }, dispatchSort] = React.useReducer(sortReducer, { products: products, sort: SortEnum.Rating })

   const setSort = (sort: SortEnum) => {
      dispatchSort({ type: sort })
   }

   const [isLoaded, setIsLoaded] = React.useState(false)

   React.useEffect(() => {
      setIsLoaded(true)
   }, [])

   return (
      <div className={styles.wrapper}>
         <Sort sort={sort} setSort={setSort} />

         <div>{sortedProducts && sortedProducts.map(p =>
            <Product
               layout
               key={p._id}
               product={p}
               isLoaded={isLoaded}
            />)}
         </div>
      </div>
   )
}

export default SortWrapper