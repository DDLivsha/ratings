import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Product.module.css'
import { ProductModel } from '@/interfaces/product'
import Card from '../Card/Card'
import { priceUa } from '@/helpers/helpers'
import Rating from '../Rating/Rating'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import Divider from '../Divider/Divider'
import Image from 'next/image'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   product: ProductModel
   isLoaded: boolean
}
const Product: FC<Props> = ({ product, isLoaded }) => {
   return (
      <Card className={styles.product}>
         <div className={styles.logo}>
            <Image
               className={styles.image}
               src={product.image}
               alt={product.title}
               width={70}
               height={70}
               placeholder='blur'
               blurDataURL={`/_next/image?url=${encodeURIComponent(product.image)}&w=16&q=1`}
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
         <div className={styles.rateTitle}>{product.reviewCount} {product.reviewCount == 1 ? 'review' : 'reviews'}</div>
         <Divider className={styles.hr} />
         <div className={styles.description}>{product.description}</div>
         <div className={styles.feauture}>
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
         <Divider className={styles.hr} />
         <div className={styles.actions}>
            <Button appearance='primary'>Find out more</Button>
            <Button appearance='ghost' arrow='right'>Reviews</Button>
         </div>
      </Card>
   )
}

export default Product