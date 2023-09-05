import axiosInstance from "./axiosCofig";

export const loginApi = async (values: any) => {
  const url = "/auth/login";
  const data = values;
  const response = await axiosInstance.post(url, data);
  return response;
};
