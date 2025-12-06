import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export const createOrder = async (item) => {
  return await http().post(endpoints.orders.getAll, item);
};

export const updateOrder = async (id, item) => {
  return await http().put(`${endpoints.orders.getAll}/${id}`, item);
};

export const deleteOrder = async (id) => {
  return await http().delete(`${endpoints.orders.getAll}/${id}`);
};
export const getOrder = async (id) => {
  return await http().get(`${endpoints.orders.getAll}/${id}`);
};

export const getOrders = async () => {
  return await http().get(endpoints.orders.getAll);
};

export const getOrderItems = async (orderId) => {
  return await http().get(`${endpoints.orders.getAll}/${orderId}/items`);
};
