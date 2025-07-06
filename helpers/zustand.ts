import { create } from "zustand";

interface ReviewOpenState {
   productId: string;
   openReview: (id: string) => void;
   closeReview: () => void;
}

export const useReviewOpen = create<ReviewOpenState>((set) => ({
   productId: '',
   openReview: (id: string) => set({ productId: id }),
   closeReview: () => set({ productId: '' }),
}))
