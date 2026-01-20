import Image from "next/image";
import { Store, ShoppingBag, Gift } from "lucide-react";

export default function About() {
  return (
    <>
      <div
        className=" bg-cover bg-center relative "
        style={{ backgroundImage: "url('/img/about-bg.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative  overflow-hidden rounded-lg">
              <Image
                src="/img/product2.JPG"
                alt="about us"
                width={500}
                height={500}
                className="w-full object-cover max-h-[500px]"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <h2 className="font-serif text-5xl text-slate-900 mb-4">
                About Us
              </h2>

              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg">
                Murliwala Aggarwal Sweets was founded in 2012 by Mr. Manoj Kumar
                Goyal, with a simple vision — to serve honest, high-quality
                sweets and snacks made with purity, tradition, and consistency.
                What began as a small neighbourhood outlet has now grown into a
                trusted name across Delhi, loved for its authentic taste and
                reliable quality.
              </p>

              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg">
                Over the years, we’ve expanded our range from traditional Indian
                mithai to namkeens, bakery products, fresh cakes, biscuits, and
                festive gift hampers. Even as we’ve grown, our values remain the
                same: clean preparation, premium ingredients, and flavours that
                remind you of home.
              </p>
              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg">
                At Murliwala Aggarwal Sweets, every product—whether it’s a box
                of laddoos, a designer cake, or a festive hamper—reflects our
                commitment to freshness, hygiene, and heartfelt craftsmanship.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            <div className="text-center">
              <div className="font-serif text-6xl text-[#b89968] lg:text-7xl">
                115
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#2d3e2f]">
                Clients
              </h3>
              <p className="mt-2 text-sm italic leading-relaxed text-[#5a6b5c]">
                Male suada pellentes que elit eget gravida cum sociis.
              </p>
            </div>
            <div className="text-center">
              <div className="font-serif text-6xl text-[#b89968] lg:text-7xl">
                45
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#2d3e2f]">
                Employees
              </h3>
              <p className="mt-2 text-sm italic leading-relaxed text-[#5a6b5c]">
                Male suada pellentes que elit eget gravida cum sociis.
              </p>
            </div>
            <div className="text-center">
              <div className="font-serif text-6xl text-[#b89968] lg:text-7xl">
                25
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#2d3e2f]">
                Locations
              </h3>
              <p className="mt-2 text-sm italic leading-relaxed text-[#5a6b5c]">
                Male suada pellentes que elit eget gravida cum sociis.
              </p>
            </div>
            <div className="text-center">
              <div className="font-serif text-6xl text-[#b89968] lg:text-7xl">
                89
              </div>
              <h3 className="mt-4 font-serif text-xl text-[#2d3e2f]">Cakes</h3>
              <p className="mt-2 text-sm italic leading-relaxed text-[#5a6b5c]">
                Male suada pellentes que elit eget gravida cum sociis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className=" bg-cover bg-center py-12 relative "
        style={{ backgroundImage: "url('/img/bg-2.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/img/product1.JPG"
                alt="features"
                width={500}
                height={500}
                className="w-full object-cover max-h-[500px]"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <h2 className="font-serif text-5xl text-slate-900 mb-4">
                What Sets Us Apart
              </h2>

              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg mb-3">
                Our journey is built on authenticity, purity, and consistency.
                Every product reflects years of expertise, modern hygienic
                practices, and a commitment to delivering flavours trusted by
                families since 2012.
              </p>

              {/* Points */}
              <div className="space-y-4 pt-4">
                {/* Point 1 */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <Store
                      className="h-7 w-7 text-amber-50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      Authentic Recipes
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      Authentic recipes perfected over years of experience to
                      deliver rich, traditional flavours.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <ShoppingBag
                      className="h-7 w-7 text-amber-50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      Hygienic & Modern Production
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      Modern, hygienic production processes with a strong focus
                      on purity and quality.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <Gift className="h-7 w-7 text-amber-50" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      Wide Product Range
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      A wide assortment of sweets, cakes, bakery items, and
                      snacks to suit every occasion.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <Gift className="h-7 w-7 text-amber-50" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      Custom Gifting & Celebrations
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      Custom hampers, corporate gifting, and wedding special
                      orders crafted for memorable celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-[#2d3e2f] lg:text-5xl">
              Our Purpose
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a6b5c]">
              Rooted in tradition, driven by quality, and inspired by trust
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Mission */}
            <div className="rounded-lg bg-amber-50 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7a9278]">
                  {/* Target Icon */}
                  <svg
                    className="h-10 w-10 text-amber-50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.364-5.364l-2.121 2.121M8.757 15.243l-2.121 2.121m0-10.607l2.121 2.121m8.486 8.486l2.121 2.121"
                    />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-serif text-2xl text-[#2d3e2f]">
                Our Mission
              </h3>
              <p className="leading-relaxed text-[#5a6b5c]">
                To serve pure, high-quality sweets and bakery products crafted
                with authentic recipes, hygienic processes, and consistent taste
                that families can trust every day.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-lg bg-amber-50 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7a9278]">
                  {/* Eye / Vision Icon */}
                  <svg
                    className="h-10 w-10 text-amber-50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-serif text-2xl text-[#2d3e2f]">
                Our Vision
              </h3>
              <p className="leading-relaxed text-[#5a6b5c]">
                To become Delhi’s most reliable and modern sweets & bakery
                brand—one that blends tradition with innovation and brings
                people together through unforgettable flavours.
              </p>
            </div>

            {/* Values / Promise */}
            <div className="rounded-lg bg-amber-50 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7a9278]">
                  {/* Handshake / Trust Icon */}
                  <svg
                    className="h-10 w-10 text-amber-50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5 5L22 6M2 12l5 5L17 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-serif text-2xl text-[#2d3e2f]">
                Our Values & Promise
              </h3>
              <p className="leading-relaxed text-[#5a6b5c]">
                Purity-first ingredients, consistent taste, innovation in
                flavours and packaging, honest pricing, and respect for every
                customer and team member. Your celebrations matter to us—and we
                strive to earn your trust with freshness, quality, and
                continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
