import Image from "next/image";

const reviews = [
  {
    name: "Karan Patel",
    username: "@karanpatel",
    body: "AI-driven form templates save me so much setup time. FormEase is a lifesaver for my team.",
    img: "https://avatar.vercel.sh/karan",
  },
  {
    name: "Meera Joshi",
    username: "@meerajoshi",
    body: "The collaboration features are amazing! My colleagues and I can edit forms together in real time.",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Sahil Khan",
    username: "@sahilkhan",
    body: "Exporting data to Excel is super smooth. I rely on this daily for client reports.",
    img: "https://avatar.vercel.sh/sahil",
  },
  {
    name: "Ritika Das",
    username: "@ritikadas",
    body: "I love the drag-and-drop builder. Customizing forms feels effortless, even for non-tech users.",
    img: "https://avatar.vercel.sh/ritika",
  },
  {
    name: "Aditya Menon",
    username: "@adityamenon",
    body: "FormEase integrates beautifully with Slack. Notifications help me act on responses instantly.",
    img: "https://avatar.vercel.sh/aditya",
  },
  {
    name: "Sneha Reddy",
    username: "@snehareddy",
    body: "Conditional logic in forms is a game-changer. It makes my surveys so much smarter.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Dev Singh",
    username: "@devsingh",
    body: "The mobile-friendly design ensures I can collect responses anywhere. Super convenient!",
    img: "https://avatar.vercel.sh/dev",
  },
  {
    name: "Ishita Chawla",
    username: "@ishitachawla",
    body: "I never thought form creation could be this fun. The AI suggestions are always spot on!",
    img: "https://avatar.vercel.sh/ishita",
  },
  {
    name: "Parth Garg",
    username: "@parthgarg",
    body: "Built-in analytics gives me instant insights into my campaigns. Saves hours of manual work.",
    img: "https://avatar.vercel.sh/parth",
  },
  {
    name: "Tanya Bansal",
    username: "@tanyabansal",
    body: "FormEase is so intuitive. I created a registration form for my workshop in under 2 minutes!",
    img: "https://avatar.vercel.sh/tanya",
  },
];

export default function Testimonial() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {reviews.map((review) => (
        <figure
          key={review.name}
          className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl  p-4 bg-zinc-950/[.05] hover:bg-zinc-950/[.05] dark:border-zinc-800/50 dark:bg-zinc-800/50 dark:hover:bg-zinc-50/[.15] transition-colors duration-100"
        >
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src={review.img}
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {review.name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">
                {review.username}
              </p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{review.body}</blockquote>
        </figure>
      ))}
    </div>
  );
}
