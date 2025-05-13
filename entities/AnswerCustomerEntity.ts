export interface AnswerCustomersEntity {
  id: number
  category: string
  symptomCode: string
  symptom: string
  staffMessages: string
  customerMessages: string
  content: string
  extraProducts?: string
  createdAt: Date
}