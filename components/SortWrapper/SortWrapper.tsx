'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './SortWrapper.module.css'
import Sort, { SortEnum } from '../Sort/Sort'
import { ProductModel } from '@/interfaces/product'
import { sortReducer } from './sort.reducer'

interface Props {
   products: ProductModel[]
}

const SortWrapper: FC<Props> = ({ products }) => {

   const [{ products: sortedProducts, sort }, dispatchSort] = React.useReducer(sortReducer, { products: products, sort: SortEnum.Rating })

   const setSort = (sort: SortEnum) => {
      dispatchSort({ type: sort })
   }

   return (
      <>
         <Sort sort={sort} setSort={setSort} />
         <div>{sortedProducts && sortedProducts.map(p => <div key={p._id}>{p.title}</div>)}</div>
      </>
   )
}

export default SortWrapper