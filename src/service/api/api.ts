// import { createUserParam, userCredentialParam } from "@/utils/type";
// import axiosInstance from "./axiosCofig";
// import { AxiosRequestConfig } from "axios";

// const config: AxiosRequestConfig = { withCredentials: true };

// export const loginApi = async (values: userCredentialParam) => {
//   const url = "/auth/login";
//   const data = values;
//   const response = await axiosInstance.post(url, data, config);
//   return response;
// };

// export const registerApi = async (values: createUserParam) => {
//   const url = "/auth/register";
//   const data = values;
//   const response = await axiosInstance.post(url, data, config);
//   return response;
// };

// // get user profile from api endpoint by passing access token in header
// export const getUserProfileApi = async (accessToken: string) => {
//   const url = "/user/profile";
//   const headers = {
//     Authorization: `Bearer ${accessToken}`,
//   };
//   const response = await axiosInstance.get(url, { headers });
//   return response;
// };
