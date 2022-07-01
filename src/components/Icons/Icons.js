import React from "react";
import styles from "./Icons.module.scss";

const Icons = ({ icons }) => {
  return (
    <div className={styles.icons}>
      {icons.map(({ link, img, name }, index) => {
        return link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <img
              className={styles.icon}
              src={img}
              alt={name}
              aria-label={name}
            />
          </a>
        ) : (
          <div className={styles.iconWrapper} key={index}>
            <img
              className={styles.icon}
              src={img}
              alt={name}
              aria-label={name}
            />
            <span className={styles.iconName}>{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
