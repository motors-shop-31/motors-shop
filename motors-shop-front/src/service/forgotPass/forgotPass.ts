import api from "../api";

interface IForgotPass {
  email: string;
}

interface IForgotCode {
  code: number;
}

export async function forgotPass(body: IForgotPass) {
  const { data, status } = await api.patch("/forgot", body);

  return { data, status };
}

export async function forgotCodeApi(body: IForgotCode) {
  const { data, status } = await api.post(`/forgot/verify`, body);
  return { data, status };
}
