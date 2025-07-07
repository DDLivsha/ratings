import { MenuItem } from "@/interfaces/menu";
import { IReviewForm } from "@/interfaces/review-form";

interface CreateReview extends IReviewForm {
   productId: string
}

export async function createReview(body: CreateReview): Promise<Response> {
   
   return await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/review/create-demo`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
   });

}