import api from "../api";

interface IRequest {
  bodyUser: any;
  url: string;
  tokenJson: string;
}

export async function genericUserRota(
  url: string,
  bodyUser: any,
  tokenJson: string
) {
  const { data, status } = await api.patch(url, bodyUser, {
    headers: {
      Authorization: `Basic ${tokenJson}`,
    },
  });

  return { data, status };
}
