'use client'
import React, { FC } from 'react'
import { Button } from '../Button/Button'
import { useReviewOpen } from '@/helpers/zustand'
import { ProductModel } from '@/interfaces/product'

interface Props {
   product: ProductModel
}

const Buttons: FC<Props> = ({ product }) => {

   const { productId, openReview, closeReview } = useReviewOpen()

   return (
      <>
         <Button appearance='primary'>Find out more</Button>
         {product.reviews.length > 0 && <Button
            appearance='ghost'
            arrow={productId === product._id ? 'down' : 'right'}
            onClick={() => productId === product._id ? closeReview() : openReview(product._id)}
         >Reviews</Button>}
      </>
   )

}

export default Buttons