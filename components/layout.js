import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen" data-aos="fade-up">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
