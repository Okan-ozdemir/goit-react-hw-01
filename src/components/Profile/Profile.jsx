import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>Jacques Gluke</p>
        <p className={styles.username}>@jgluke</p>
        <p className={styles.location}>Ocho Rios, Jamaika</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Followers</span>
          <span className={styles.statValue}>5603</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Views</span>
          <span className={styles.statValue}>4827</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Likes</span>
          <span className={styles.statValue}>1308</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
