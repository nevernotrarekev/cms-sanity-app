import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children, fullHeight = true }) {
  return (
    <>
      <Meta />
      <Header />
      <div className={fullHeight && "min-h-screen"} style={{paddingBottom: fullHeight ? 0 : 64}} data-aos="fade-in" data-aos-duration="600" >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
