import { Gender } from "@/utils/heightCalculator"

export interface FormValuesHoSoKhachHang {
  puberty: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined
  currentHeight: string
  currentFatherHeight: string
  currentMotherHeight: string
  currentWeight: string
  gender: Gender
  currentAge: string
  phoneNumber: string
  fullName: string
}