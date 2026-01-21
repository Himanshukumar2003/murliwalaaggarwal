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
