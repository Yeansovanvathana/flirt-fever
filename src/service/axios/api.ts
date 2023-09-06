import { createUserParam, userCredentialParam } from "@/utils/type";
import axiosInstance from "./axiosCofig";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = { withCredentials: true };

export const loginApi = async (values: userCredentialParam) => {
  const url = "/auth/login";
  const data = values;
  const response = await axiosInstance.post(url, data, config);
  return response;
};

export const registerApi = async (values: createUserParam) => {
  const url = "/auth/register";
  const data = values;
  const response = await axiosInstance.post(url, data, config);
  return response;
};
