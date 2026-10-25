import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
