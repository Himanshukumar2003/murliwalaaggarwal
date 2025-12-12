import { Facebook, Twitter, Linkedin, Eye } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-secondary text-[#d4c5b9] py-16 px-8"
      style={{
        backgroundImage: "url('/img/bg-3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Section */}
      <div className="  container px-4">
        <div className="grid grid-cols-3 gap-8 mb-12 ">
          {/* Contact Us */}
          <div className="text-center">
            <h3 className="text-[#f5e6e0] font-semibold tracking-widest text-sm mb-4">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed">
                2972 Westheimer Rd. Santa Ana,
                <br />
                Illinois 85486
              </p>
              <p className="text-sm">
                <a
                  href="tel:(702)555-0122"
                  className="hover:text-[#f5e6e0] transition"
                >
                  (702) 555-0122
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="mailto:sugartown@example.com"
                  className="hover:text-[#f5e6e0] transition"
                >
                  Sugartown@example.com
                </a>
              </p>
            </div>
          </div>

          {/* About Us */}
          <div className="text-center">
            <h3 className="text-[#f5e6e0] font-semibold tracking-widest text-sm mb-4">
              ABOUT US
            </h3>
            <p className="text-sm leading-relaxed">
              We make everything on-premises from scratch by a small team of
              passionate and highly trained bakers. We use only the best
              ingredients, baking throughout the day with care, technique and
              lots of love.
            </p>
          </div>

          {/* Opening Time */}
          <div className="text-center">
            <h3 className="text-[#f5e6e0] font-semibold tracking-widest text-sm mb-4">
              OPENING TIME
            </h3>
            <div className="space-y-3">
              <p className="text-sm">
                Mon-Sat: 7:30am - 7:00pm
                <br />
                Sun: 8:00am - 6:00pm
              </p>
              <div className="mt-6">
                <p className="text-[#f5e6e0] font-semibold text-sm mb-3">
                  KEEP IN TOUCH
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://facebook.com"
                    className="hover:text-[#f5e6e0] transition"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="hover:text-[#f5e6e0] transition"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="hover:text-[#f5e6e0] transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://tripadvisor.com"
                    className="hover:text-[#f5e6e0] transition"
                    aria-label="TripAdvisor"
                  >
                    <Eye size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-b-[#4a7a6d] pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex gap-8 mb-6 md:mb-0 text-sm">
              <a href="#" className="hover:text-[#f5e6e0] transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f5e6e0] transition">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-[#f5e6e0] transition">
                Security
              </a>
            </div>

            {/* Center Logo */}
            <div className="mb-6 md:mb-0">
              <div className="text-center text-[#f5e6e0] font-serif text-3xl font-bold">
                <Image
                  src="/logo.png"
                  width={200}
                  height={200}
                  className="w-[200px]"
                  alt="footer-logo"
                ></Image>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-center md:text-right">
              Copyright © 2025{" "}
              <span className="text-[#d4b8aa]">Sugar Town</span>. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
