import { api } from "@/utils/api";

export function changeMyPassword({ currentPassword, newPassword } : { currentPassword: string; newPassword: string }) {
  return api(`/api/change-password`, {
    method: 'POST',
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}

export function getMe() {
  return api(`/api/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}