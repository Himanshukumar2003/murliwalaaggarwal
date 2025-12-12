import { Breadcrumb } from "@/components/breadcrumb";
import About from "./_componets/about";

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
