import { createUserParam, userCredentialParam } from "@/utils/type";
import createAxiosInstance from "./axiosCofig";
import { AxiosInstance } from "axios";
import { API_ENDPOINT } from "@/utils/enum";

const axiosClient: AxiosInstance = createAxiosInstance();

export async function AuthLogin(formData: userCredentialParam) {
  try {
    const response = await axiosClient.post(API_ENDPOINT.AUTH.LOGIN, {
      formData,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function AuthRegister(formData: createUserParam) {
  try {
    const response = await axiosClient.post(
      API_ENDPOINT.AUTH.REGISTER,
      formData
    );

    return response;
  } catch (error) {
    throw error;
  }
}
