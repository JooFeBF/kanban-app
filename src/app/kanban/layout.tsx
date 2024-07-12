import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex flex-col">
        <Header />
        <div className="flex flex-1 h-full">
          <Navbar />
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
}
