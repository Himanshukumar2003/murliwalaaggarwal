import Image from "next/image";
import { Store, ShoppingBag, Gift } from "lucide-react";

export default function About() {
  return (
    <>
      <div className=" bg-amber-50">
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
                Over 20 years as your local neighborhood bakery, made possible
                by you
              </h2>

              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg">
                Sharing our love for celebration was always the dream, and
                sharing it with colleagues, friends, and family is what we
                do...and will continue you do for you. From our Icebox Cake to
                our Red Velvet cupcakes, our goal is to make the most fresh,
                most delicious sweets we can. We use natural ingredients,
                traditional recipes and skilled bakers to do this.
              </p>

              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg">
                Sharing our love for celebration was always the dream, and
                sharing it with colleagues, friends, and family is what we
                do...and will continue you do for you. From our Icebox Cake to
                our Red Velvet cupcakes, our goal is to make the most fresh,
                most delicious sweets we can. We use natural ingredients,
                traditional recipes and skilled bakers to do this.
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
      <div className="bg-amber-50 section">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative  overflow-hidden rounded-lg">
              <Image
                src="/img/product1.JPG"
                alt="feachers"
                width={500}
                height={500}
                className="w-full object-cover max-h-[500px]"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <h2 className="font-serif text-5xl text-slate-900 mb-4">
                Over 20 years as your local neighborhood bakery, made possible
                by you
              </h2>

              <p className="text-base leading-relaxed text-[#5a6b5c] md:text-lg">
                Sharing our love for celebration was always the dream, and
                sharing it with colleagues, friends, and family is what we
                do...and will continue you do for you. From our Icebox Cake to
                our Red Velvet cupcakes, our goal is to make the most fresh,
                most delicious sweets we can. We use natural ingredients,
                traditional recipes and skilled bakers to do this.
              </p>

              {/* Services */}
              <div className="space-y-6 pt-4">
                {/* In Store Pickup */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <Store
                      className="h-7 w-7 text-amber-50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      In Store Pickup
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      Pick up as early as 9AM from any of our 3 Manhattan
                      locations.
                    </p>
                  </div>
                </div>

                {/* Local Delivery */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <ShoppingBag
                      className="h-7 w-7 text-amber-50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      Local Delivery
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      We&apos;ll bring it to you in Manhattan and most parts of
                      Brooklyn and Queens.
                    </p>
                  </div>
                </div>

                {/* Shipping Nationwide */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7a9278]">
                    <Gift className="h-7 w-7 text-amber-50" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="font-serif text-xl text-[#2d3e2f]">
                      Shipping Nationwide
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6b5c]">
                      A curated selection of treats delivered to the comfort of
                      your home.
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
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-[#2d3e2f] lg:text-5xl">
              Our Purpose
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a6b5c]">
              Guided by tradition, driven by passion, and committed to
              excellence
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Mission */}
            <div className="rounded-lg bg-amber-50 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7a9278]">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-serif text-2xl text-[#2d3e2f]">
                Our Mission
              </h3>
              <p className="leading-relaxed text-[#5a6b5c]">
                To craft exceptional baked goods using time-honored recipes and
                the finest natural ingredients, bringing joy and celebration to
                every neighborhood we serve.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-lg bg-amber-50 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7a9278]">
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
                To be the heart of every celebration and cherished moment,
                creating lasting memories one delicious treat at a time, for
                generations to come.
              </p>
            </div>

            {/* Values */}
            <div className="rounded-lg bg-amber-50 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7a9278]">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-serif text-2xl text-[#2d3e2f]">
                Our Values
              </h3>
              <p className="leading-relaxed text-[#5a6b5c]">
                Quality, community, and authenticity guide everything we do. We
                believe in supporting local, honoring tradition, and treating
                every customer like family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
