import React from "react";
import ClickableIcon from "../ClickableIcon/ClickableIcon";
import Icons from "../Icons/Icons";
import styles from "./Experience.module.scss";

const Experience = ({ experience }) => {
  const { date, title, companyLogo, pointers, logos } = experience;

  return (
    <div>
      <h4 className={styles.date}>{date}</h4>
      <h3>{title}</h3>
      <h3 className={styles.company}>
        <ClickableIcon icon={companyLogo} />
      </h3>

      <ul className={styles.list}>
        {pointers.map((pointer, index) => (
          <li key={index}>{pointer}</li>
        ))}
      </ul>

      <Icons icons={logos} />
    </div>
  );
};

export default Experience;
