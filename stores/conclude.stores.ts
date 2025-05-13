import { FormValuesConclude } from "@/app/ket-luan/types";
import { create } from "zustand";

interface ConcludeStoreType {
  concludeData: FormValuesConclude | null
  setConcludeData: (ConcludeData: FormValuesConclude | ((prev: FormValuesConclude | null) => FormValuesConclude) | null) => void
  isSubmited: boolean
  setIsSubmited: (isSubmited: boolean) => void
}

export const useConcludeStore = create<ConcludeStoreType>()((set) => ({
  isSubmited: false,
  setIsSubmited: (isSubmited) => set(() => ({ isSubmited })),
  concludeData: null,
  setConcludeData: (item) =>
    set((state) => ({
      concludeData: typeof item === 'function' ? item(state.concludeData) : item,
    })),
}))