import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen" data-aos="fade-in" data-aos-duration="600" >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
