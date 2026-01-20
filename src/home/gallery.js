import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Heading from "@/components/ui/heading";

const imgArray = [
  "/img/product1.JPG",
  "/img/product2.JPG",
  "/img/product3.JPG",
  "/img/product4.JPG",
  "/img/product5.JPG",
  "/img/product1.JPG",
  "/img/product2.JPG",
  "/img/product3.JPG",
];

export default function Gallery() {
  return (
    <div className="bg-gray-50">
      <div className=" container py-16  max-w-7xl  mx-auto px-4">
        <Heading
          tag="Gallery"
          title="Our Sweet Gallery"
          subtitle="Delicious Moments Captured in Flavours & Traditions"
          subtitleClass="text-gray-700"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {imgArray.map((src, index) => (
            <DirectionAwareHover
              key={index}
              imageUrl={src}
              className="  rounded-none  h-40 w-full object-contain md:w-full lg:w-full"
              childrenClassName="text-lg font-semibold "
              showOverlay={false}
            ></DirectionAwareHover>
          ))}
        </div>
      </div>
    </div>
  );
}
