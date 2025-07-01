import React from 'react'
import { notFound } from "next/navigation";
import { Htag } from '@/components';
import { TopPageModel } from '@/interfaces/top-page';
import { getPage } from '@/api/get-page';

const routes = {
   courses: 'courses',
   services: 'services',
   books: 'books',
   products: 'products'
}

export default async function TopPage({ params }: { params: { type: string } }) {

   if (!Object.values(routes).includes(params.type)) return notFound()

   return (
      <>
         Курси
      </>
   )
}
