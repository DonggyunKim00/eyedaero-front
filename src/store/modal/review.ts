import { create } from 'zustand';

interface Prop {
  reviewModalState: boolean;
  open: () => void;
  close: () => void;
}

const useReviewModalState = create<Prop>((set) => ({
  reviewModalState: false,
  open: () => set(() => ({ reviewModalState: true })),
  close: () => set(() => ({ reviewModalState: false })),
}));

export default useReviewModalState;
