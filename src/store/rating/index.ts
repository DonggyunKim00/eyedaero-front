import { create } from 'zustand';

interface Prop {
  score: number;
  setScore: (input: number) => void;
  init: () => void;
}

const useScoreStore = create<Prop>((set) => ({
  score: 0,
  setScore: (input) => set(() => ({ score: input })),
  init: () => set(() => ({ score: 0 })),
}));

export default useScoreStore;
