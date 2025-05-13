import { CreateAnswerCustomers } from "@/dto/AnswerCustomerDTO";
import { api } from "@/utils/api";

export function createAnswerCustomers(data: CreateAnswerCustomers) {
  return api(`/api/answer-customers`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function getAnswerCustomers({ search, page, pageSize }: { search?: string, page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (search) params.append('search', search.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  return api(`/api/answer-customers?${params.toString()}`);
}

export function updateAnswerCustomer({ id, data } : { id: number, data: CreateAnswerCustomers }) {
  return api(`/api/answer-customers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deleteAnswerCustomer(id: number) {
  return api(`/api/answer-customers/${id}`, {
    method: 'DELETE',
  })
}
