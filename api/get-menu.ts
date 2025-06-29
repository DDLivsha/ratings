import { MenuItem } from "@/interfaces/menu";

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {

   const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         firstCategory
      }),
   });

   return await res.json();
}