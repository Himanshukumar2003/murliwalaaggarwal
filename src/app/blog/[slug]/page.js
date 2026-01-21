import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import RecentPosts from "../_componets/RecentPosts";
import { blogContent } from "../_componets/data";
import { Breadcrumb } from "@/components/breadcrumb";

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogContent.find((item) => item.slug === slug);

  if (!blog) {
    return <p className="p-10 text-center">Blog Not Found</p>;
  }

  const blogs = [
    {
      id: 1,
      title: "Top 10 Trending Bhaji Boxes for Weddings in Delhi NCR (2026)",
      excerpt:
        "Weddings in Delhi NCR are evolving, and so are gifting traditions. One element that continues to remain timeless is the bhaji box.",
      date: "Jan 20, 2026",
      category: "Wedding Trends",
    },
    {
      id: 2,
      title: "Why Bhaji Boxes Are a Must-Have for Indian Weddings in Delhi",
      excerpt:
        "Bhaji boxes have always been an integral part of Indian weddings, especially in Delhi where traditions are deeply valued.",
      date: "Jan 15, 2026",
      category: "Traditions",
    },
    {
      id: 3,
      title: "How to Choose the Perfect Wedding Bhaji Box in Delhi NCR",
      excerpt:
        "Choosing the right bhaji box for a wedding can feel overwhelming, especially in a market like Delhi NCR with endless options.",
      date: "Jan 10, 2026",
      category: "Guide",
    },
    {
      id: 4,
      title:
        "Traditional Indian Sweets That Are Perfect for Wedding Bhaji Boxes",
      excerpt:
        "Traditional Indian sweets play a central role in wedding bhaji boxes, especially in Delhi NCR where cultural roots are strongly preserved.",
      date: "Jan 5, 2026",
      category: "Sweets",
    },
  ];

  return (
    <>
      <Breadcrumb
        title={blog.title}
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: blog.title,
            //   href={`/blog/${blog.slug}`},
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blogs
            </Link>

            <h1 className="text-4xl font-bold md:text-5xl">{blog.title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {blog.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                <Tag className="h-4 w-4" />
                {blog.category}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar */}
            <aside>
              <RecentPosts blogs={blogContent} />
            </aside>

            {/* Article */}
            <article className="lg:col-span-2 space-y-8">
              <div className="prose prose-invert max-w-none text-lg">
                {blog.content.split("\n\n").map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Related Blogs */}
              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">Other Articles</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {blogContent
                    .filter((item) => item.slug !== blog.slug)
                    .slice(0, 2)
                    .map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="rounded-lg border border-border bg-card p-5 hover:border-primary hover:shadow-lg"
                      >
                        <h4 className="font-semibold hover:text-primary">
                          {related.title}
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {related.date}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
