import Container from "./container";
import styles from "./footer.module.scss";
import cn from "classnames";
import FooterIllo from "./FooterIllo";
import TinyLion from "./tiny-lion";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <Container>
        <div className={styles.footer}>
          <div className={styles.details}>
            <div className={styles.top}>
              <h3>Drop us a line:</h3>
              <a
                className={cn("text-carnation", styles.email)}
                href="emailto:mondial@mondialcreative.com"
              >
                Mondial@MondialCreative.com
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

    //       <div className={cn("col-start-8 col-span-4", styles.footerIllo)}>
    //         <FooterIllo />
    //       </div>
    //       <div className={styles.attribute}>
    //         <div>
    //           Brothered With:
    //           <TinyLion />
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  );
}
