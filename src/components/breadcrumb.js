"use client";

import React from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Breadcrumb({ items, title, className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Background Image */}
      <div className="relative w-full h-[300px]  overflow-hidden ">
        <Image
          src="/img/banner.png"
          alt={title}
          height={500}
          width={500}
          className="w-full h-full object-cover absolute inset-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,61,116,0.7)]" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex pt-[100px]   flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-4xl text-center max-w-7xl font-bold mb-4">
          {title}
        </h1>

        <nav className="flex flex-wrap justify-center items-center space-x-2">
          <Link
            href="/"
            className="flex items-center hover:text-green-500 text-lg transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>

          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="h-4 w-4 text-gray-300 text-lg" />
              {item.isCurrent ? (
                <span className="text-green-500 font-medium">{item.label}</span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-green-500 text-lg transition-colors"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
