import { string } from "yup";
import api from "../api";

interface ILogin {
  name: string;
  password: string;
}

export async function loginPost(body: ILogin) {
  const { data, status } = await api.post("/login", body);

  return { data, status };
}
