import type { Metadata } from "next";
import ListingShowcase from "@/components/showcase/ListingShowcase";

export const metadata: Metadata = {
  title: "Listing Images Showcase | Abdullah",
  description: "Premium Amazon listing image systems designed for clarity, conversion, and mobile-first shopping.",
};

export default function ListingImagesPage() {
  return <ListingShowcase />;
}
