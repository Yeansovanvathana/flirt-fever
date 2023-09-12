import createAxiosInstance from "./axiosCofig";
import { AxiosInstance } from "axios";
import { API_ENDPOINT } from "@/utils/enum";
import { MessageParams } from "@/utils/type";

const axiosClient: AxiosInstance = createAxiosInstance();

export async function postMessage(
  token: string,
  username: string,
  conversationId: number,
  content: string
) {
  try {
    const response = await axiosClient.post(
      API_ENDPOINT.MESSAGE.POST_MESSAGE,
      {
        content,
        username,
        conversationId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getMessage(token: string, id: number) {
  try {
    const response = await axiosClient.get(
      API_ENDPOINT.MESSAGE.GET_MESSAGE(id),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
}
