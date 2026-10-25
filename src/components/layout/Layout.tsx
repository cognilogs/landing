import Nav from "./Nav";
import Footer from "./Footer";
import ScrollManager from "@/components/ui/ScrollManager";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
