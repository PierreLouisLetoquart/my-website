import Link from "next/link";

type Article = {
  title: string;
  description: string;
  date: string;
  url: string;
};

const articles: Article[] = [
  {
    title: "Fine-tuning GPT-3 for Code Generation",
    description:
      "A step-by-step guide on how to fine-tune GPT-3 for code generation with OpenAI's API and vLLM library.",
    date: "2021-10-08",
    url: "https://pierrelouis.dev/blog/fine-tuning-gpt-3-for-code-generation",
  },
  {
    title: "How to build a React Native app with Expo",
    description:
      "A step-by-step guide on how to build a React Native app with Expo.",
    date: "2021-09-28",
    url: "https://pierrelouis.dev/blog/how-to-build-a-react-native-app-with-expo",
  },
  {
    title: "How to build a React app with Vite",
    description: "A step-by-step guide on how to build a React app with Vite.",
    date: "2021-09-18",
    url: "https://pierrelouis.dev/blog/how-to-build-a-react-app-with-vite",
  },
];

export default function Page() {
  return (
    <div className="w-full py-32 text-lg font-light space-y-32">
      {/* Hello World Section */}
      <div className="space-y-6 px-6">
        <p className="mb-14 tracking-[-0.015rem] font-medium">👋 Hello World</p>

        <h1>
          My name is{" "}
          <span className="font-medium tracking-tight">Pierre-Louis</span>,
        </h1>

        <p className="leading-8">
          I am a <span className="font-medium">french</span> software engineer,
          passionate about <span className="font-medium">innovation</span> and{" "}
          <span className="font-medium">creation</span>; when I&apos;m not
          programming, I enjoy trail running and writing articles!
        </p>

        <p>Currently based in Montreal.</p>
      </div>

      {/* Articles Section */}
      <div>
        <h2 className="px-6 tracking-tight mb-14 font-medium">
          Articles and Projects
        </h2>
        <div className="space-y-3">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-xl transition-colors hover:bg-hovered"
            >
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-medium tracking-tight">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.date}</p>
              </div>
              <p className="truncate text-muted-foreground">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-6 space-y-6">
        <h2 className="tracking-tight mb-14 font-medium">Contact</h2>
        <p className="leading-8">
          Reach out to me on{" "}
          <Link
            className="underline underline-offset-4 decoration-1"
            href={"#"}
          >
            LinkedIn
          </Link>{" "}
          even if it&apos;s just to say hi! For a more formal discussion, you
          can also send me an email at{" "}
          <Link
            className="underline underline-offset-4 decoration-1"
            href="mailto:pierrelouislet@gmail.com"
          >
            pierrelouislet@gmail.com
          </Link>
          !
        </p>
      </div>
    </div>
  );
}
