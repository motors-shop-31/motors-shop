import api from "../api";

export async function userDelete(tokenJson: string, id: string) {
  const { data, status } = await api.delete(`/user/${id}`, {
    headers: {
      Authorization: `Basic ${tokenJson}`,
    },
  });

  return { data, status };
}
