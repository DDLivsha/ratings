import { TopPageModel } from "@/interfaces/top-page";

export async function getPage(alias: string): Promise<TopPageModel | null> {

   const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/` + alias, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      },
   });

   if (!res.ok) {
      return null
   }
   return await res.json();
}