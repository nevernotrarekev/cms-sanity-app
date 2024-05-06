import Container from "./container";
import styles from "./footer.module.scss";
import cn from "classnames";
import FooterIllo from "./FooterIllo";
import TinyLion from "./tiny-lion";
import { SiGooglemaps, SiInstagram, SiLinkedin } from "react-icons/si";
import classNames from "classnames";

export default function Footer() {
  return (
    <footer className="bg-mndlBlue relative">
      <Container>
        <div className={cn(styles.footer, 'min-h-[280px]')}>
          <div className={styles.details}>
            <div className={styles.bottom}>
              <h4>MONDIAL</h4>
              <div className={styles["flex-col"]}>
                <div className="flex flex-col">
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

                  <div className="-mb-2">{`© MONDIAL ${new Date().getFullYear()}`}</div>
                </div>
                <div className={classNames(styles.secondary, 'flex flex-col justify-between')}>
                  <div className={'flex flex-col'}>
                    <div className="">nicola@mondialcreative.com</div>
                    <div className="">804-303-4528</div>
                  </div>
                  <div className={'flex'}>
                    <a
                      className={"text-carnation mr-4 hover:text-white"}
                      href="https://maps.app.goo.gl/UyK8EN5EU5868xq46"
                      target="_blank"
                    >
                      <SiGooglemaps size={16} />
                    </a>
                    <a
                      className={"text-carnation mr-4 hover:text-white"}
                      href="https://www.linkedin.com/company/mondial-creative-labs"
                      target="_blank"
                    >
                      <SiLinkedin size={16} />
                    </a>
                    <a
                      className={"text-carnation mr-4 hover:text-white"}
                      href="https://www.instagram.com/mondialcreative"
                      target="_blank"
                    >
                      <SiInstagram size={16} />
                    </a>
                  </div>
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
