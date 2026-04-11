import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}



