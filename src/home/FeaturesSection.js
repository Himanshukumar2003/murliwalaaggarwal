import { Leaf, Sparkles, ShieldCheck, Heart } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import Heading from "@/components/ui/heading";
const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Made Fresh",
    description: "Prepared in small batches to ensure maximum freshness.",
    subdescription: "Crafted only when needed — never stored, never stale.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "High-Quality Natural Ingredients",
    description: "We use carefully sourced, natural ingredients you can trust.",
    subdescription: "No fillers — just purity, quality, and consistency.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Zero Artificial Additives",
    description: "Free from artificial colouring, ammonia, and preservatives.",
    subdescription: "What you get is clean, honest, and safe formulation.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "100% Vegetarian",
    description: "Completely vegetarian and ethically formulated.",
    subdescription: "Kind to your body, aligned with conscious choices.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className=" bg-cover bg-center py-16  relative  "
      style={{ backgroundImage: "url('/img/bg-2.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Heading
          title="Purity You Can Trust"
          subtitle="  Every product is crafted with intention, using only the finest
            natural ingredients for your wellbeing."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              subdescription={feature.subdescription}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-8 text-center  " style={{ animationDelay: "400ms" }}>
          <div
            className="inline-flex items-center gap-2 text-muted-foreground 
border-2 border-primary p-3 rounded-[10px]
transition-all duration-300 ease-in-out
hover:-translate-y-1
hover:scale-[1.02]
hover:shadow-lg"
          >
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm">Naturally crafted with love</span>
            <Leaf className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
