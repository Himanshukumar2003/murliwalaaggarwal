"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOrder, getOrderItems } from "@/services/order-services";
import { MdOutlineDirectionsTransitFilled } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import {
  Package,
  Calendar,
  Download,
  Receipt,
  ClipboardCheck,
  PackageSearch,
  BookX,
  CircleX,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loader from "@/components/loader";
import Card from "@/components/productsCardTwo";

const STATUS_STEPS = [
  { label: "Order Accepted", icon: ClipboardCheck },
  { label: "Order Processing", icon: PackageSearch },
  { label: "In Transit", icon: MdOutlineDirectionsTransitFilled },
  { label: "Out For Delivery", icon: TbTruckDelivery },
  { label: "Delivered", icon: FaCheck },
];

export default function OrderDetailsPage({}) {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["order-items", id],
    queryFn: () => getOrderItems(id),
  });

  const {
    data: order,
    isLoading: isOrderLoading,
    isError: isOrderError,
    error: orderError,
  } = useQuery({
    queryKey: ["orders", id],
    queryFn: () => getOrder(id),
  });

  console.log("orders:", data);
  if (isLoading) return <Loader></Loader>;
  if (isError) return <p className="p-6 text-red-500">{error.message}</p>;

  const orderData = data?.data;
  const items = orderData?.items || [];

  if (!items.length) {
    return <p className="p-6 text-red-500">No items found for this order</p>;
  }

  const currentStatus = order?.data?.order_status;
  const currentStatusIndex = STATUS_STEPS.findIndex(
    (step) => step.label.toLowerCase() === currentStatus?.toLowerCase()
  );
  console.log(currentStatus);

  const handleDownloadInvoice = () => {
    alert("Invoice download demo! Implement actual PDF download here.");
  };

  return (
    <div className="min-h-screen bg-gray-50  px-4 py-20">
      <div className="max-w-5xl mx-auto space-y-8 mt-10">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 lg:p-8">
          {isOrderLoading ? (
            <Loader />
          ) : isOrderError ? (
            <p className="text-red-500">
              {orderError?.message ?? "Something went wrong"}
            </p>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Order #{order?.data?.order_number}
                </h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Placed on{" "}
                  {new Date(items[0]?.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              {currentStatus == "Canceled" ? <></> : null}
              {/* <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDownloadInvoice}
                    className="relative    rounded-none  items-center  !flex gap-2 px-4  min-h-[50px] uppercase bg-transparent border border-primary text-primary  leading-normal inline-block text-center text-md font-semibold tracking-[0.32px] transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)] hover:border-primary hover:text-white hover:bg-primary"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </button>
                </div> */}
            </div>
          )}

          {/* Status Stepper UI */}

          {currentStatus == "Canceled" ? (
            <div className="rounded-4xl gap-6 p-10 mx-auto  flex justify-center  items-center  flex-col">
              <CircleX size={60} className="text-red-500" />
              <p className="text-4xl"> Order Canceled</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-center justify-center mt-6 lg:px-4">
              {STATUS_STEPS.map((step, index) => {
                const isCompleted = index <= currentStatusIndex;
                const isUpcoming = index > currentStatusIndex;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center relative z-10 w-full lg:w-1/4 mt-10 lg:mt-0"
                  >
                    {/* Circle */}
                    <div
                      className={`
                      w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center
                      transition-all duration-500 shadow-lg
                      ${
                        isCompleted
                          ? "bg-green-500 text-white scale-100"
                          : "bg-gray-300 text-white scale-90"
                      }
                    `}
                    >
                      <step.icon size={22} />
                    </div>

                    {/* Label */}
                    <p
                      className={`
                      mt-3 text-xs md:text-sm font-semibold text-center
                      ${isCompleted ? "text-green-500" : "text-gray-400"}
                    `}
                    >
                      {step.label}
                    </p>

                    {/* Connector Line */}
                    {index < STATUS_STEPS.length - 1 && (
                      <div
                        className="
                        absolute
                        lg:top-8 lg:left-1/2 lg:w-full lg:h-0.5
                        top-full left-1/2 h-12 w-0.5
                        -z-10
                      "
                      >
                        <div className="relative w-full h-full">
                          {/* Base Line */}
                          <div className="absolute inset-0 bg-gray-300 rounded-full" />

                          {/* Progress */}
                          <div
                            className={`
                            absolute inset-0 bg-green-500 rounded-full transition-all duration-500
                            ${isCompleted ? "w-full h-full" : "w-0 lg:h-0"}
                          `}
                          />

                          {/* Dotted for Upcoming */}
                          {isUpcoming && (
                            <div className="absolute inset-0 flex items-center justify-center gap-1 flex-col lg:flex-row">
                              {[...Array(6)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-1.5 h-1.5 rounded-full bg-gray-400"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Order Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Package className="w-5 h-5 mr-3 text-green-600" />
                Order Items
              </h2>
              <div>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col  gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex gap-10">
                        <div className="">
                          <Image
                            width={200}
                            height={200}
                            src={`${process.env.NEXT_PUBLIC_FILE_BASE}${item.pictures[0]}`}
                            alt={item.title}
                            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-sm border"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Quantity:</span>{" "}
                            {item.quantity}
                          </p>
                          <div>
                            <p className="text-lg font-semibold text-green-500 italic">
                              ₹
                              {(
                                Number(item.price) * item.quantity
                              ).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">
                              ₹{Number(item.price).toLocaleString()} each
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 w-full">
                        {/* Sections */}
                        {item.sections?.length > 0 && (
                          <div className="mt-4">
                            <p className="text-xs font-semibold text-gray-700 uppercase mb-2">
                              Box Sections
                            </p>
                            <div className="flex justify-start  gap-5 flex-wrap">
                              {item.sections.map((section, idx) => (
                                <div
                                  key={idx}
                                  className="bg-primary/10 border-primary border-1  rounded-lg flex gap-2  min-w-[120px] px-4 py-1 border text-xs"
                                >
                                  <p className="text-primary font-medium">
                                    Section {section.section}
                                  </p>{" "}
                                  :
                                  <p className="text-gray-600">
                                    {section.sweet}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                          {/* Sticker Print */}
                          {item.print_sticker_on_box && (
                            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <p className="text-xs font-semibold text-blue-700 uppercase mb-1">
                                Print Sticker on Box
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                {item.print_sticker_on_box.text}
                              </p>
                              <p className="text-xs text-gray-600 mt-1">
                                Print Type:{" "}
                                <span className="font-medium capitalize">
                                  {item.print_sticker_on_box.print_type.replace(
                                    "_",
                                    " "
                                  )}
                                </span>
                              </p>
                            </div>
                          )}

                          {item.bag_print?.text && (
                            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                              <p className="text-xs font-semibold text-green-700 uppercase mb-1">
                                Bag Print
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                {item.bag_print.text}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Price Section */}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Receipt className="w-5 h-5 mr-3 text-green-600" />
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Items</span>
                  <span className="font-medium">{items.length}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between py-2">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      ₹
                      {items
                        .reduce((sum, i) => sum + parseFloat(i.total || 0), 0)
                        .toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
