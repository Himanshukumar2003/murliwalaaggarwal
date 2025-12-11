import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  return (
    <section className="bg-blue-50 py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Gallery Artisan keeps an open communication!</h3>
            <p className="text-gray-600  leading-relaxed mb-4">
              Whether you have a question about our current exhibitions, are interested in learning more about a
              specific artist, or simply want to know more about our upcoming events, we welcome your inquiry.
            </p>

            <div className="space-y-4 border-t-2 border-blue-500 pt-4">
              <p className="text-sm font-medium text-blue-900">Share Your Idea*</p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/images/hero-1.png" />
                    <AvatarFallback className="bg-blue-500 text-white">A1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/images/hero-2.png" />
                    <AvatarFallback className="bg-blue-600 text-white">A2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/images/hero-2.png" />
                    <AvatarFallback className="bg-blue-700 text-white">A3</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">More than 500 people</p>
                  <p className="text-xs text-blue-600">visit our Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonial */}
          {/* <div>
            <Card className="bg-white border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-blue-500 text-2xl mb-4">★★★★★</div>
                  <blockquote className="text-lg text-blue-900 leading-relaxed">
                    &ldquo;Gallery Artisan has transformed how I experience art. The curated exhibitions are thoughtfully
                    presented, and the staff&apos;s knowledge adds so much depth to each visit. It&#39;s become my favorite place
                    to discover new artists and connect with the local art community.&ldquo;
                  </blockquote>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/happy-customer-portrait.png" />
                    <AvatarFallback className="bg-blue-500 text-white">SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-blue-900">Sarah Chen</p>
                    <p className="text-sm text-blue-600">Art Collector</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  )
}
