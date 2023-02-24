import api from "../api";

export async function getAllProduct() {
  const { data, status } = await api.get("/product");

  return { data, status };
}
