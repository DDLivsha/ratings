import { TopLevelCategory } from "@/interfaces/top-page";
import { JSX } from "react";
import CoursesIcon from '@/assets/images/sidebar/courses.svg'
import BooksIcon from '@/assets/images/sidebar/books.svg'
import ServicesIcon from '@/assets/images/sidebar/services.svg'
import ProductsIcon from '@/assets/images/sidebar/products.svg'

export interface firstLevelMenuItem {
   route: string;
   name: string;
   icon: JSX.Element;
   id: TopLevelCategory;
}

export const firstLevelMenu: firstLevelMenuItem[] = [
   {
      route: 'courses',
      name: 'Courses',
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses
   },
   {
      route: 'services',
      name: 'Services',
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services
   },
   {
      route: 'books',
      name: 'Books',
      icon: <BooksIcon />,
      id: TopLevelCategory.Books
   },
   {
      route: 'products',
      name: 'Products',
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products
   }
]

export const priceUa = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴')