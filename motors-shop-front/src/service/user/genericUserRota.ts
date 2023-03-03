import api from "../api";

interface IRequest {
  bodyUser: any;
  url: string;
}

const tokenJson = localStorage.getItem("token");

export async function genericUserRota({ url, bodyUser }: IRequest) {
  const { data, status } = await api.patch(url, bodyUser, {
    headers: {
      Authorization: `Basic ${tokenJson}`,
    },
  });

  return { data, status };
}
