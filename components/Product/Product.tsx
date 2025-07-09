'use client'
import React, { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from 'react'
import styles from './Product.module.css'
import { ProductModel } from '@/interfaces/product'
import Card from '../Card/Card'
import { priceUa } from '@/helpers/helpers'
import Rating from '../Rating/Rating'
import { Tag } from '../Tag/Tag'
import Divider from '../Divider/Divider'
import Image from 'next/image'
import cn from 'classnames'
import Reviews from '../Reviews/Reviews'
import Buttons from './Buttons'
import { useReviewOpen } from '@/helpers/zustand'
import { motion } from 'framer-motion'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   product: ProductModel
   isLoaded: boolean
}

const Product = motion(forwardRef(({ product, isLoaded }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {

   const reviewRef = React.useRef<HTMLDivElement>(null)
   const { productId, openReview, closeReview } = useReviewOpen()

   const scrollToReview = () => {
      openReview(product._id)

      const timeout = setTimeout(() => {
         reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
         })
         reviewRef.current?.focus()
      }, 300)
      return () => clearTimeout(timeout)

   }

   return (
      <>
         <Card ref={ref} className={styles.product}>
            <div className={styles.logo}>
               <Image
                  className={styles.image}
                  src={product.image}
                  alt={product.title}
                  width={70}
                  height={70}
               />
            </div>
            <div className={styles.title}>
               {product.title}
            </div>
            <div className={styles.price}>
               {priceUa(product.price)}
               {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceUa(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>
               {priceUa(product.credit)}/<span>month</span>
            </div>
            <div className={styles.rating}>
               {isLoaded
                  ?
                  <Rating rating={product.reviewAvg || product.initialRating} />
                  :
                  <div className={styles.skeleton}></div>}
            </div>
            <div className={styles.tags}>
               {product.categories.map(c => <Tag key={c} color='ghost' size='s'>{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>price</div>
            <div className={styles.creditTitle}>credit</div>
            <div className={styles.rateTitle}><a href='#ref' onClick={scrollToReview}>{product.reviewCount} {product.reviewCount == 1 ? 'review' : 'reviews'}</a></div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
               {product.characteristics.map(c => (<div key={c.name} className={styles.characteristic}>
                  <span className={styles.characteristicName}>{c.name}</span>
                  <span className={styles.characteristicDots}></span>
                  <span className={styles.characteristicValue}>{c.value}</span>
               </div>))}
            </div>
            <div className={styles.advBlock}>
               {product.advantages && <div className={styles.advantages}>
                  <div className={styles.advTitle}>Advantages</div>
                  <div>{product.advantages}</div>
               </div>}
               {product.disadvantages && <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Disdvantages</div>
                  <div>{product.disadvantages}</div>
               </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
               <Buttons product={product} />
            </div>
         </Card>
         <Reviews tabIndex={productId === product._id ? 0 : -1} ref={reviewRef} product={product} reviews={product.reviews || []} />
      </>
   )
}))

export default Product