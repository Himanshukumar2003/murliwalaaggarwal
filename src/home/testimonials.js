import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Ramesh Aggarwal",
    username: "@ramesh",
    body: "The bhaji boxes were packed so beautifully and tasted exactly like traditional halwai sweets. Guests were genuinely asking where we ordered from. Everything felt fresh and hygienic.",
    img: "https://avatar.vercel.sh/ramesh",
  },
  {
    name: "Pooja Bansal",
    username: "@pooja",
    body: "We ordered wedding bhaji boxes for 350 guests and every single box was consistent in taste and quality. The presentation looked premium and traditional at the same time.",
    img: "https://avatar.vercel.sh/pooja",
  },
  {
    name: "Ankit Goyal",
    username: "@ankit",
    body: "Very authentic taste, just like the sweets we grew up eating. The ghee aroma, softness, and balance of sweetness were perfect. Highly recommended for family functions.",
    img: "https://avatar.vercel.sh/ankit",
  },
  {
    name: "Neha Mittal",
    username: "@neha",
    body: "The bhaji boxes added a lot of charm to our wedding rituals. Packing was neat, delivery was on time, and not even one box was damaged.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Sunita Jain",
    username: "@sunita",
    body: "Ordered bhaji boxes for my daughter’s wedding and received so many compliments from relatives. Everyone loved the freshness and traditional flavour.",
    img: "https://avatar.vercel.sh/sunita",
  },
  {
    name: "Mohit Singhal",
    username: "@mohit",
    body: "We needed bulk bhaji boxes for a community function and Murliwala handled it very professionally. Taste, quantity, and hygiene were all up to the mark.",
    img: "https://avatar.vercel.sh/mohit",
  },
  {
    name: "Alka Verma",
    username: "@alka",
    body: "The sweets were not overly sweet, which we really appreciated. Even elderly guests enjoyed them. Perfect choice for weddings and poojas.",
    img: "https://avatar.vercel.sh/alka",
  },
  {
    name: "Deepak Sharma",
    username: "@deepak",
    body: "Packaging was elegant and sturdy, making it easy to distribute to guests. The sweets stayed fresh even the next day.",
    img: "https://avatar.vercel.sh/deepak",
  },
  {
    name: "Nitin Gupta",
    username: "@nitin",
    body: "We tried bhaji boxes for our engagement ceremony and ended up ordering again for the wedding. Quality remained excellent both times.",
    img: "https://avatar.vercel.sh/nitin",
  },
  {
    name: "Kavita Agarwal",
    username: "@kavita",
    body: "Traditional taste with modern hygiene standards. Exactly what you expect when ordering bhaji boxes for an important family occasion.",
    img: "https://avatar.vercel.sh/kavita",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-72 p-5 rounded-2xl",
        "bg-[#101014]/60 backdrop-blur-sm",
        "border border-white/10",

        "text-white"
      )}
    >
      {/* top subtle gradient glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none
      bg-gradient-to-b from-transparent via-transparent to-secondary"
      />

      {/* noise overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-20 mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

      {/* star row */}
      <div className="flex gap-1 relative z-10 mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
      </div>

      {/* quote */}
      <blockquote className="relative z-10 text-sm leading-relaxed text-white/90">
        “I was skeptical at first, but this AI tool saved me hours of work. The
        automation features are a game-changer.”
      </blockquote>

      {/* profile */}
      <div className="flex items-center gap-3 mt-4 relative z-10">
        <img src={img} alt="" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-white/60">{username}</p>
        </div>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div
      className="bg-secondary text-[#d4c5b9] py-16"
      style={{
        backgroundImage: "url('/img/bg-3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-secondary pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-secondary pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </div>
  );
}
