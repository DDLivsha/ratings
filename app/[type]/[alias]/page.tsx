import { getPage } from "@/api/get-page";
import { getProduct } from "@/api/get-product";
import { Htag, Tag } from "@/components";
import { ProductModel } from "@/interfaces/product";
import { TopPageModel } from "@/interfaces/top-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import HhData from "@/components/HhData/HhData";
import Advantages from "@/components/Advantages/Advantages";
import Typography from "@/components/Typography/Typography";
import Sort, { SortEnum } from "@/components/Sort/Sort";
import SortWrapper from "@/components/SortWrapper/SortWrapper";

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
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <Htag tag="h1">{page.title}</Htag>
            {products && <Tag color="gray" size="m">{products?.length}</Tag>}
            <SortWrapper products={products || []} />
         </div>
         {/* <div>{products && products.map(p => <div key={p._id}>{p.title}</div>)}</div> */}
         <div className={styles.hhTitle}>
            <Htag tag="h2">Vacancies - {page.category}</Htag>
            {products && <Tag color="red" size="m">hh.com</Tag>}
         </div>
         {page.hh && <HhData {...page.hh} />}
         {page.advantages && page.advantages.length > 0 && (
            <>
               <Htag tag="h2">Advantages</Htag>
               <Advantages advantages={page.advantages} />
            </>
         )}
         {page.seoText && (
            <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }}></div>
         )}
         <Htag tag="h2">Skills you get</Htag>
         {page.tags && page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
      </div>
   );
}
