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
      <div className=" pt-16  relative bg-[#FFFBEB]">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="container px-4 mx-auto mt-6">
            <Heading
              tag="About"
              title="About Us"
              subtitle="Rooted in tradition and guided by purity, we craft sweets that celebrate authentic Indian flavours. Every creation reflects our promise of quality, freshness, and heartfelt taste."
              subtitleClass="text-gray-700 max-w-xl mx-auto leading-relaxed"
            />

            {/* Main Grid Section */}
            <div className="grid lg:grid-cols-3 gap-10 items-stretch">
              {/* LEFT TEXT */}
              <div
                className="text-md  tracking-widest text-slate-600 order-2 lg:order-1
                        flex flex-col h-full justify-between"
              >
                <div>
                  Murliwala Aggarwal Sweets was founded in 2012 by Mr. Manoj
                  Kumar Goyal, with a simple vision — to serve honest,
                  high-quality sweets and snacks made with purity, tradition,
                  and consistency.
                  <br />
                  <br />
                  What began as a small neighbourhood outlet has now grown into
                  a trusted name across Delhi, loved for its authentic taste and
                  reliable quality. Over the years, we’ve expanded our range
                  from traditional Indian mithai to namkeens, bakery products,
                  fresh cakes, biscuits, and festive gift hampers.
                </div>

                <div className="h-[3px] bg-green-600 mt-10"></div>
              </div>

              {/* IMAGE CENTER */}
              <div className="order-1 relative lg:order-2 flex items-center">
                <Image
                  src="/img/about-us.png"
                  alt="Sugar Town Bakery storefront"
                  width={500}
                  height={500}
                  className="w-full max-h-[450px]  rounded-t-[200px]"
                />
              </div>

              {/* RIGHT TEXT */}
              <div
                className="text-md  tracking-widest text-slate-600 order-3
                        flex flex-col h-full justify-between"
              >
                <div>
                  Even as we’ve grown, our values remain the same: clean
                  preparation, premium ingredients, and flavours that remind you
                  of home.
                  <br />
                  <br />
                  At Murliwala Aggarwal Sweets, every product—whether it’s a box
                  of laddoos, a designer cake, or a festive hamper—reflects our
                  commitment to freshness, hygiene, and heartfelt craftsmanship.
                </div>

                <div className="h-[3px] bg-green-600 mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
