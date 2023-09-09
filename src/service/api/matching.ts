import createAxiosInstance from "./axiosCofig";
import { AxiosInstance } from "axios";
import { API_ENDPOINT } from "@/utils/enum";

const axiosClient: AxiosInstance = createAxiosInstance();

export async function postMatching(token: string, username: string) {
  try {
    const response = await axiosClient.get(API_ENDPOINT.USER.INFO(username), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function acceptMatching(data: any) {
  try {
    const response = await axiosClient.patch(
      API_ENDPOINT.USER.INFO_UPDATE,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getMatching(token: string) {
  try {
    const response = await axiosClient.get(
      API_ENDPOINT.MATCHING.GET_MATCHING_REQUEST,
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
