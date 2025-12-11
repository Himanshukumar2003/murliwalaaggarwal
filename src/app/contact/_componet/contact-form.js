"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-[url('/img/bg.webp')] bg-cover bg-center py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Message */}
          <div className="text-white">
            <p className="text-sm opacity-70 mb-4">ASK US ANYTHING</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              SHARE YOUR 📧 <br />
              MESSAGE & WE&apos;LL <br />
              RESPOND
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a question about our current exhibitions, are
              interested in learning more about a specific artist, or simply
              want to share your thoughts on contemporary art, we welcome your
              message.
            </p>
          </div>

          {/* Right side - Form */}
          <Card className="bg-white shadow-xl border border-gray-200 py-5 lg:-mb-[400px]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Get in Touch
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Please fill out the form below, and we will get back to you as
                soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Phone Number*
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Email*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>
                <button className="btn" type="submit">
                  <span>submit</span>
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
