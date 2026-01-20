import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <p className="text-lg uppercase tracking-wide text-green-500 mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-6">
            Get in Touch <br />
            With{" "}
            <span className="inline-flex items-center gap-2">
              Murliwala Aggarwal
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            Have a question or want to connect? We’re here to help! Reach out to
            us using the contact info below:
          </p>

          <div className="grid sm:grid-cols-2 gap-8 border-t pt-8">
            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 text-black mb-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call Us</span>
              </div>
              <p className="text-gray-700 mb-1">
                <a
                  href="tel: +91 83683 25656

"
                  className="hover:underline"
                >
                  +91 83683 25656
                </a>
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 text-black mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email</span>
              </div>
              <p className="text-gray-700">
                <a
                  href="mailto:info@murliwalaaggarwal.com"
                  className="hover:underline"
                >
                  info@murliwalaaggarwal.com
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 text-black mb-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Address</span>
              </div>
              <p className="text-gray-700">
                Shop No. 1, Opp (School Gate No. 3), Om Nagar, Mithapur
                Extension, Badar Pur, Delhi – 110044
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full flex flex-col justify-center items-center">
          <Image
            src="/img/product2.JPG"
            alt="Murliwala Aggarwal Contact"
            width={500}
            height={500}
            className="w-full mix-blend-multiply rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
