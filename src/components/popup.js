"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";

export default function DelayedPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      className="max-h-[300px] p-0 m-0"
    >
      <DialogContent className="min-w-[900px] p-0 !rounded-none  max-h-[330px] overflow-hidden z-99 flex !bottom-0 !left-auto !right-0 translate-0 border-0">
        <div className="w-1/2 relative hidden md:block">
          <Image
            src="/img/popup.jpg"
            alt="Offer"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 p-6 flex   flex-col   justify-center ">
          <DialogTitle className="text-3xl font-semibold mb-3">
            Get 10% Off your next Order
          </DialogTitle>

          <p className="text-gray-600 mb-4">
            Save on your first order, and get plenty of offers when you join.
          </p>

          <div className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-3 w-1/2 py-2  rounded"
            />
            <Button className="bg-black text-white px-4 rounded">
              SIGN ME UP
            </Button>
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <input type="checkbox" />
            Disable this popup
          </label>

          <button
            onClick={() => setOpen(false)}
            className="underline text-sm text-smart text-gray-800"
          >
            No thanks, I’ll pay full price
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
