import Header from "@/app/components/marketing/Header";
import Footer from "@/app/components/marketing/Footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}