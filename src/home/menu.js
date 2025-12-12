import Image from "next/image";

export default function Menu(params) {
  return (
    <>
      <section
        className="bg-secondary text-[#d4c5b9] py-16 px-8"
        style={{
          backgroundImage: "url('/img/bg-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/80">
              TASTE THE BEST THAT SURPRISE YOU
            </p>
            <h2 className="font-serif text-4xl text-white lg:text-5xl">
              Our special menu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Iuvaret conceptam ad vel, in iusto habemus deleniti sea, eam
              audiam omnesque ex. Vix augue mediocrem in, ad possit
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* Sidebar Menu Categories */}
            <div className="rounded-lg bg-[#e8dcc8] p-8">
              <nav className="space-y-6">
                <button className="w-full border-b border-[#2d3e2f]/20 pb-4 text-center font-serif text-sm uppercase tracking-wider text-[#2d3e2f] transition-colors hover:text-[#7a9278]">
                  BIRTHDAY TREATS
                </button>
                <button className="w-full border-b border-[#2d3e2f]/20 pb-4 text-center font-serif text-sm uppercase tracking-wider text-[#2d3e2f] transition-colors hover:text-[#7a9278]">
                  BAKED HOSTESS GIFTS
                </button>
                <button className="w-full border-b border-[#2d3e2f]/20 pb-4 text-center font-serif text-sm uppercase tracking-wider text-[#2d3e2f] transition-colors hover:text-[#7a9278]">
                  THANK YOU
                </button>
                <button className="w-full border-b border-[#2d3e2f]/20 pb-4 text-center font-serif text-sm uppercase tracking-wider text-[#2d3e2f] transition-colors hover:text-[#7a9278]">
                  STOCKING STUFFERS
                </button>
                <button className="mt-8 w-full border border-[#2d3e2f] bg-white px-6 py-3 text-center text-sm uppercase tracking-wider text-[#2d3e2f] transition-colors hover:bg-[#2d3e2f] hover:text-white">
                  VIEW ALL MENUS
                </button>
              </nav>
            </div>

            {/* Menu Items Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Menu Item 1 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/green-donut-with-yellow-center.jpg"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/yellow-tart-with-custard.jpg"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/chocolate-cake-slice.png"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/green-macaron.jpg"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 5 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/artisan-bread-loaf.png"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 6 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/assorted-pastries.jpg"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 7 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/chocolate-canele-pastry.jpg"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>

              {/* Menu Item 8 */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/img/buttery-croissant.jpg"
                    alt="Heart Cookies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-white">
                      Heart Cookies
                    </h3>
                    <span className="font-serif text-lg text-white">$4.78</span>
                  </div>
                  <p className="text-sm text-white/60">
                    (eggs, milk, sugar, vanilla)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
