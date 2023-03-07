import api from "../api";

export async function getAllcommentsByProduct(id: string) {
  const { data, status } = await api.get(`/comments/${id}`);

  return { data, status };
}
