import Image from "next/image";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      src: "/img/croissants-with-strawberry-jam-on-elegant-table.jpg",
      alt: "Croissants with strawberry jam",
      category: "FOOD & DRINK",
      date: "Feb 26, 2025",
      title: "Croissants Slathered in Creamy Butter and Sweet Strawberry Jam",
    },
    {
      id: 2,
      src: "/img/product3.JPG",
      alt: "Choux pastries",
      category: "FOOD & DRINK",
      date: "Feb 26, 2025",
      title: "Discover the Delight of Choux Happy for Christmas Holiday",
    },
    {
      id: 3,
      src: "/img/stacked-chocolate-chip-cookies.jpg",
      alt: "Chocolate chip cookies",
      category: "FOOD & DRINK",
      date: "Feb 26, 2025",
      title: "Chocolate Chip Cookie Day is Every Day",
    },
  ];

  return (
    <section className="py-12   bg-[#FFFBEB]">
      <div className="mx-auto max-w-7xl px-4 lg:px-4 ">
        <h2 className="mb-12 text-center font-serif text-4xl  text-[#2d3e2f] lg:text-5xl">
          Latest News
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-serif uppercase tracking-wider text-[#e07856]">
                    {post.category}
                  </span>
                  <span className="text-[#5a6b5c]">{post.date}</span>
                </div>

                <h3 className="font-serif text-2xl leading-tight text-[#2d3e2f] transition-colors duration-300 group-hover:text-[#7a9278]">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
