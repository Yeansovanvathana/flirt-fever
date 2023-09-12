import createAxiosInstance from "./axiosCofig";
import { AxiosInstance } from "axios";
import { API_ENDPOINT } from "@/utils/enum";

const axiosClient: AxiosInstance = createAxiosInstance();

// export async function postMatching(token: string, username: string) {
//   try {
//     const response = await axiosClient.get(API_ENDPOINT.USER.INFO(username), {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response;
//   } catch (error) {
//     throw error;
//   }
// }

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
