import Loader from "@/components/loader";
import { getAddresses } from "@/services/address-services";
import { createOrder } from "@/services/order-services";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Building2, Home, MapPin, Phone, User } from "lucide-react";

export default function Addresses(params) {
  const createMutation = useMutation({
    mutationFn: createOrder,
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["addressees"],
    queryFn: getAddresses,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="text-red-500">
          {error?.message ?? "Something went wrong"}
        </p>
      ) : (
        <div className="space-y-4">
          <div className=" bg-gradient-to-br from-green-50 to-green-100">
            <div className=" mx-auto px-4 py-12">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-green-800 mb-2">
                  Saved Address
                </h1>
                <p className="text-green-600">Total addresses: {data.total}</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {data.addresses.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-green-700 to-green-600 px-8 py-6">
                        <div className="flex items-center gap-3 text-white">
                          <User className="w-6 h-6" />
                          <h2 className="text-2xl font-semibold">
                            {item.address.fullname}
                          </h2>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-green-100 rounded-lg">
                              <Home className="w-5 h-5 text-green-700" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                                Street Address
                              </p>
                              <p className="text-green-800 font-medium">
                                {item.address.house}, {item.address.street}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-green-100 rounded-lg">
                              <Building2 className="w-5 h-5 text-green-700" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                                City & State
                              </p>
                              <p className="text-green-800 font-medium">
                                {item.address.city}, {item.address.state}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-green-100 rounded-lg">
                              <MapPin className="w-5 h-5 text-green-700" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                                Postal Code
                              </p>
                              <p className="text-green-800 font-medium">
                                {item.address.postal_code}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-5">
                            <div className="flex items-start gap-4">
                              <div className="mt-1 p-2 bg-green-100 rounded-lg">
                                <Phone className="w-5 h-5 text-green-700" />
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                                  Phone Number
                                </p>
                                <a
                                  href={`tel:${item.address.phone}`}
                                  className="text-green-800 font-medium hover:text-green-600 transition-colors"
                                >
                                  {item.address.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
