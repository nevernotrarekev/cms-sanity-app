import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children, fullHeight = true }) {
  return (
    <>
      <Meta />
      <Header />
      <div className={fullHeight && "min-h-screen"}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
