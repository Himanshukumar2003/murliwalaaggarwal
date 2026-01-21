import Link from "next/link";

export default function RecentPosts({ blogs }) {
  return (
    <aside className="sticky top-8 space-y-6">
      <div className="rounded-lg border border-border bg-card p-6 md:p-8">
        <h3 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
          Recent Posts
        </h3>

        <div className="space-y-4">
          {blogs.slice(0, 5).map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.sulg}`}
              className="group block space-y-2 rounded-lg p-3 transition-colors hover:bg-primary/5"
            >
              <h4 className="text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-primary md:text-base">
                {blog.title}
              </h4>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground md:text-sm">
                  {blog.date}
                </span>
                <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {blog.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <hr className="my-6 border-border" />

        <h3 className="mb-4 font-semibold text-foreground">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {["Wedding Trends", "Traditions", "Guide", "Sweets"].map((cat) => (
            <button
              key={cat}
              className="rounded-full border border-border bg-background px-3 py-1 text-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
