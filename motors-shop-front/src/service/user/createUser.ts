import { IUser } from "../../interface/userInterface";
import api from "../api";

export async function createUser(body: IUser) {
  const { data, status } = await api.post("/user", body);

  return { data, status };
}
