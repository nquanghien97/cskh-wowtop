import { FormValuesHoSoKhachHang } from "@/app/ho-so-khach-hang/types";
import { create } from "zustand";

interface HoSoKhachHangStoreType {
  hoSoData: FormValuesHoSoKhachHang | null
  setHoSoData: (data: FormValuesHoSoKhachHang | ((prev: FormValuesHoSoKhachHang | null) => FormValuesHoSoKhachHang) | null) => void
  isSubmited: boolean
  setIsSubmited: (isSubmited: boolean) => void
}

export const useHoSoKhachHangStore = create<HoSoKhachHangStoreType>()((set) => ({
  isSubmited: false,
  setIsSubmited: (isSubmited) => set(() => ({ isSubmited })),
  hoSoData: null,
  setHoSoData: (item) =>
    set((state) => ({
      hoSoData: typeof item === 'function' ? item(state.hoSoData) : item,
    })),
}))