import { Breadcrumb } from "@/components/breadcrumb";
import About from "./_componets/about";
export const metadata = {
  title: "Non-ATL Technology Learning Kits – BDS Education",
  description:
    "Browse Non-ATL educational kits from BDS Education for early-stage technology learning in robotics, coding, and creative engineering projects.",
  keywords: [
    "non ATL kits",
    "robotics education kits",
    "coding kits for kids",
    "tech learning components",
  ],
};

export default function Aboutus(params) {
  return (
    <>
      <Breadcrumb
        title="About us"
        items={[{ label: "About us", href: "/contact", isCurrent: true }]}
      />
      <About></About>
    </>
  );
}
