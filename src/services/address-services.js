import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export const getAddresses = async () => {
  const { data } = await http().get(endpoints.addresses.getAll);
  return data;
};
export const postAddress = async (data) => {
  return await http().post(endpoints.addresses.getAll, data);
};
