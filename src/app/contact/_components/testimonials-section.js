import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Murliwala Aggarwal stays connected with you!
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you have questions about our courses, need career
              guidance, want to know about upcoming workshops, or have any other
              inquiries, we welcome your message and will get back to you
              promptly.
            </p>

            <div className="space-y-4 border-t-2 border-green-500 pt-4">
              <p className="text-sm font-medium text-green-900">
                Join Our Community*
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/images/hero-1.png" />
                    <AvatarFallback className="bg-green-500 text-white">
                      M1
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/images/hero-2.png" />
                    <AvatarFallback className="bg-green-600 text-white">
                      M2
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/images/hero-3.png" />
                    <AvatarFallback className="bg-green-700 text-white">
                      M3
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-900">
                    Over 500 students
                  </p>
                  <p className="text-xs text-green-600">
                    have joined our community
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonial */}
          {/* Optional: uncomment if you want to add a testimonial card
    <div>
      <Card className="bg-white border-green-200 shadow-lg">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="flex text-green-500 text-2xl mb-4">★★★★★</div>
            <blockquote className="text-lg text-green-900 leading-relaxed">
              &ldquo;Murliwala Aggarwal’s guidance helped me choose the perfect course for my career. 
              The mentorship and support are unmatched – highly recommend!&ldquo;
            </blockquote>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/happy-student.png" />
              <AvatarFallback className="bg-green-500 text-white">SC</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-green-900">Saurabh Choudhary</p>
              <p className="text-sm text-green-600">Student</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    */}
        </div>
      </div>
    </section>
  );
}
