import { ProductModel } from "@/interfaces/product";

export async function getProduct(category: string): Promise<ProductModel[] | null> {

   const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         category,
         limit: 10
      }),
   });

   if (!res.ok) {
      return null
   }
   return await res.json();
}