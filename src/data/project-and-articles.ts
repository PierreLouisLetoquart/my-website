export type Project = {
  title: string;
  description: string;
  date: string;
  url: string;
};

export const projects = [
  {
    title: "Runstral",
    description: "Your smart running companion built with Next.js and a Mistral model.",
    date: "Jan 14, 2025",
    url: "https://github.com/PierreLouisLetoquart/runstral",
  },
  {
    title: "Tavily Rust Client",
    description: "A tiny tool for calling Tavily's REST API in the simplest way!",
    date: "Apr 24, 2024",
    url: "https://crates.io/crates/tavily",
  },
  {
    title: "ml-distance Rust crate",
    description: "Distance-based methods for vector comparison and analysis; a porting of the JS pkg ml-distance.",
    date: "Apr 19, 2024",
    url: "https://crates.io/crates/ml-distance",
  },
  {
    title: "Dynamic binary visualization",
    description: "Transform raw binary into stunning visualization!",
    date: "Apr 17, 2024",
    url: "https://medium.com/@pierrelouislet/dynamic-binary-visualization-cae62ba79e37",
  },
  {
    title: "Can Gzip coupled with a KNN beat BERT",
    description: "Comparing performance of Gzip + KNN with BERT. Implementation of \"Less is more\" written by Zhiying Jiang.",
    date: "Feb 6, 2024",
    url: "https://github.com/PierreLouisLetoquart/kzip",
  },
] satisfies Project[];
