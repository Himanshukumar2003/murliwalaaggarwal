import { Icon } from "@radix-ui/react-select";
import { Card, CardHeader } from "./ui/card";

export default function FeatureBox({ icon, title, description }) {
  return (
    <Card className="shadow-lg p-6 bg-white rounded-md">
      <CardHeader>
        <Icon className="text-4xl text-premari">{icon}</Icon>
      </CardHeader>
      <div>
        <div className="text-2xl font-semibold text-gray-900">{title}</div>
        <p className="text-lg text-gray-700 mt-2">{description}</p>
      </div>
    </Card>
  );
}
