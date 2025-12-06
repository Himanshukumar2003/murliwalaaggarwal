import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Calendar, Phone, BadgeUser } from "lucide-react";
import { useAuth } from "@/providers/auth-provider";

export function ProfileDetails({}) {
  const { user, isUserLoading } = useAuth();
  if (isUserLoading) return "Loading...";

  return (
    <div className="space-y-0  lg:space-y-6 section">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-green-900">
          Profile Details
        </h2>
        <p className="text-muted-foreground">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-full lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="p-4  border flex pt-10 justify-items-center items-center shadow-sm rounded-xl bg-gradient-to-b from-green-50 to-white ">
          <div className="flex flex-col items-center justify-center w-auto lg:w-100  text-center">
            <Avatar className="h-24 w-24 mb-4 shadow-md ring-2 ring-green-200">
              {user.avatar ? (
                <AvatarImage src={user.avatar} alt={user.fullname} />
              ) : (
                <AvatarFallback className="bg-green-100 text-green-700 text-xl">
                  {user.firstName ? user.fullname[0].toUpperCase() : "U"}
                </AvatarFallback>
              )}
            </Avatar>

            <CardTitle className="text-green-900 text-xl">
              {user.fullname}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </Card>

        {/* Details */}
        <div className="lg:col-span-2 border shadow-sm rounded-xl bg-white">
          <CardContent className="space-y-6 py-8 px-6 ">
            {/* Grid Info */}
            <CardTitle className="text-green-900">
              Personal & Account Details
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Full Name</span>
                <p className="font-semibold text-lg text-foreground">
                  {user.fullname}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Mail className="h-4 w-4" /> Email Address
                </span>
                <p className="font-medium text-foreground">{user.email}</p>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Phone className="h-4 w-4" /> Phone Number
                </span>
                <p className="font-medium text-green-800">
                  {user.mobile_number}
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
