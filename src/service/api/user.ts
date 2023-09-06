import createAxiosInstance from "./axiosCofig";
import { AxiosInstance } from "axios";
import { API_ENDPOINT } from "@/utils/enum";

const axiosClient: AxiosInstance = createAxiosInstance();

export async function getUserInfo(token: string) {
  try {
    const response = await axiosClient.get(API_ENDPOINT.USER.INFO, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateUserInfo(id: string, data: any) {
  try {
    const response = await axiosClient.patch(
      API_ENDPOINT.USER.INFO_UPDATE(id),
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
}
