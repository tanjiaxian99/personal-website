import { useInView } from "react-intersection-observer";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <footer className={styles.container} ref={ref}>
      <div
        className={`${styles.links} ${styles.fade} ${
          !inView && styles.fadeHidden
        } ${styles.slide} ${!inView && styles.slideUpHidden}`}
      >
        <p>
          {"UI design by "}
          <a
            className={styles.link}
            href="https://sg.linkedin.com/in/sebin-aum"
            target="_blank"
            rel="noreferrer"
          >
            Sebin Aum
          </a>
        </p>
        <p>
          <a
            className={styles.link}
            href="https://github.com/tanjiaxian99/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            View the code on Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
