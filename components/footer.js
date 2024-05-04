import Container from "./container";
import styles from "./footer.module.scss";
import cn from "classnames";
import FooterIllo from "./FooterIllo";
import TinyLion from "./tiny-lion";
import { SiGooglemaps, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <Container>
        <div className={styles.footer}>
          <div className={styles.details}>
            <div className={styles.top}>
              <h3>Give us a visit:</h3>
              <a
                className={"text-carnation mr-4 hover:text-white"}
                href="https://maps.app.goo.gl/UyK8EN5EU5868xq46"
                target="_blank"
              >
                <SiGooglemaps size={24} />
              </a>
              <a
                className={"text-carnation mr-4 hover:text-white"}
                href="https://www.linkedin.com/company/mondial-creative-labs"
                target="_blank"
              >
                <SiLinkedin size={24} />
              </a>
              <a
                className={"text-carnation mr-4 hover:text-white"}
                href="https://www.instagram.com/mondialcreative"
                target="_blank"
              >
                <SiInstagram size={24} />
              </a>
            </div>
            <div className={styles.bottom}>
              <h4>Mondial Creative</h4>
              <div className={styles["flex-col"]}>
                <a
                  target="_blank"
                  href="http://maps.google.com/?q=2006 E Franklin St suite 102 Richmond, VA 23223"
                >
                  2006 E Franklin St
                  <br />
                  Suite 102
                  <br />
                  Richmond, VA 23223
                </a>
                <div className={styles.secondary}>
                  <div className="">mondial@mondialcreative.com</div>
                  <div className="">804-303-4528</div>
                  <div className="">© MONDIAL {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["footer-right"]}>
            <div className={styles["illo-wrap"]}>
              <div className={styles.illo}>
                <FooterIllo />
              </div>
            </div>
            <div className={styles.brothered}>
              <h4>Brothered With:</h4>
              <TinyLion />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
