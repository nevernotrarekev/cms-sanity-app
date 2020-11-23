import Container from "./container";
import styles from "./footer.module.scss";
import cn from "classnames";
import FooterIllo from "./FooterIllo";
import TinyLion from "./tiny-lion";

export default function Footer() {
  return (
    <footer className="text-white bg-navy pb-12">
      <Container>
        <div className="grid grid-cols-12 pt-28">
          <div className={styles.emailWrap}>
            <div className="">
              <h3 className={styles.emailTitle}>Drop us a line:</h3>
              <a
                className={cn("text-carnation", styles.email)}
                href="emailto:mondial@mondialcreative.com"
              >
                mondial@mondialcreative.com
              </a>
            </div>
            <div className="mt-10">
              <h4 className="">Mondial Creative</h4>

              <div className="flex flex-col md:flex-row justify-between mt-6">
                <a
                  className=""
                  target="_blank"
                  href="http://maps.google.com/?q=2006 E Franklin St suite 102 Richmond, VA 23223"
                >
                  2006 E Franklin St
                  <br />
                  Suite 102
                  <br />
                  Richmond, VA 23223
                </a>
                <div className="">
                  <div className="">mondial@mondialcreative.com</div>
                  <div className="">804-303-4528</div>
                  <div className="">© MONDIAL {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn("col-start-8 col-span-4", styles.footerIllo)}>
            <FooterIllo />
          </div>
          <div className={styles.attribute}>
            <div>
              brothered with:
              <TinyLion />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
