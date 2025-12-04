import CurvedLoop from "@/components/ui/curved-loop";
import Heading from "@/components/ui/heading";
import Image from "next/image";
const marqueeItems = [
  {
    text: "WE GIFT WRAP",
    icon: "/img/icon.svg",
  },
  {
    text: "French Tradition",
    icon: "/img/icon.svg",
  },
  {
    text: "LOCAL DELIVERY AVAILABLE",
    icon: "/img/icon.svg",
  },
];

export default function AboutUs() {
  return (
    <>
      <div className="bg-amber-50 pt-16">
        <div className="  container max-w-7xl px-4 mx-auto">
          <div className="container px-4 mx-auto mt-6">
            <Heading
              tag="About"
              title="About us"
              subtitle=" Handcrafted with love and the finest ingredients"
              subtitleClass="text-gray-700"
            />

            {/* Main Grid Section */}
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* LEFT TEXT */}
              <div className="text-md  uppercase tracking-widest text-slate-600  order-2 lg:order-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <div className="h-[3px] bg-green-600 mt-10 lg:mt-20"></div>
              </div>

              {/* IMAGE CENTER */}
              <div className="order-1 relative lg:order-2">
                <div className="">
                  <Image
                    src="/img/about.png"
                    alt="Sugar Town Bakery storefront"
                    width={500}
                    height={500}
                    className="w-full max-h-[550px] "
                  />
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div className="text-md uppercase tracking-widest text-slate-600   order-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
                <br />
                <br />
                Enjoy delicious pastries, warm breads, stunning cakes and
                expertly brewed drinks while feeling right at home.
                <div className="h-[3px] bg-green-600 mt-10 lg:mt-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
