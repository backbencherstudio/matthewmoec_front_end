import Footer from "../../components/clientComponents/Layout/Footer";
import Navbar from "../../components/clientComponents/Layout/Navbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
