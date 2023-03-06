import api from "../api";

export async function getUser(tokenJson: string) {
  const { data, status } = await api.get("/user", {
    headers: {
      Authorization: `Basic ${tokenJson}`,
    },
  });

  return { data, status };
}
