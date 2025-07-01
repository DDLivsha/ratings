import React from 'react'
import { notFound } from "next/navigation";

const routes = {
   courses: 'courses',
   services: 'services',
   books: 'books',
   products: 'products'
}

export default async function Courses({ params }: { params: { type: string } }) {

   if (!Object.values(routes).includes(params.type)) return notFound()

   return (
      <div>
         Курси
      </div>
   )
}
