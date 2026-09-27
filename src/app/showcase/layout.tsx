import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import ShowcaseNav from "@/components/showcase/ShowcaseNav";

export default function ShowcaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="showcase-page min-h-screen bg-[#0a0a0a] text-white">
      <CustomCursor />
      <ShowcaseNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
