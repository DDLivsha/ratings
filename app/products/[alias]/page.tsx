import { getPage } from "@/api/get-page";
import { getProduct } from "@/api/get-product";
import { ProductModel } from "@/interfaces/product";
import { TopPageModel } from "@/interfaces/top-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
   title: "Courses",
}

export default async function Course({ params }: { params: { alias: string } }) {
   const page: TopPageModel | null = await getPage(params.alias);
   const products: ProductModel[] | null = page && await getProduct(page.category);

   if (!page) {
      notFound()
   }

   return (
      <div>
         <ul>
            {products?.length}
         </ul>
      </div>
   );
}
