import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  tag = "",
  title = "",
  subtitle = "",
  className,
  tagClass,
  titleClass,
  subtitleClass,
  wrapperClass,
}) => {
  return (
    <div className={cn("text-center py-4 mb-6", wrapperClass, className)}>
      <p
        className={cn(
          "text-sm tracking-widest text-slate-600 uppercase mb-4",
          tagClass
        )}
      >
        {tag}
      </p>

      <h2 className={cn("font-serif text-5xl text-slate-900 mb-4", titleClass)}>
        {title}
      </h2>

      <p className={cn("text-slate-600 max-w-xl mx-auto", subtitleClass)}>
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
