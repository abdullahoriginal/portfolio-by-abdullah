import type { Metadata } from "next";
import EbcShowcase from "@/components/showcase/EbcShowcase";

export const metadata: Metadata = {
  title: "EBC Content Showcase | Abdullah",
  description: "Enhanced Brand Content systems that combine premium visuals, persuasive hierarchy, and mobile-first optimization.",
};

export default function EbcContentPage() {
  return <EbcShowcase />;
}
