import styles from "./ClickableIcon.module.scss";

const ClickableIcon = ({ icon: { link, img, name } }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.icon}>
      <img className={styles.icon} src={img} alt={name} aria-label={name} />
    </a>
  );
};

export default ClickableIcon;
