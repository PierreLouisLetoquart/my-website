import { ArticleList } from "@/components/article-list";
import { Contact } from "@/components/contact";
import { projects } from "@/data/project-and-articles";

export default function Page() {
  return (
    <div className="w-full py-32 text-base md:text-lg font-light space-y-32">
      {/* Hello World Section */}
      <div className="space-y-6 px-6">
        <p className="mb-14 tracking-[-0.015rem] font-medium">
          👋 Hello, World!
        </p>

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

      <div>
        <h2 className="px-6 tracking-tight mb-14 font-medium">
          Articles and Projects
        </h2>
        <ArticleList articles={projects} />
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
