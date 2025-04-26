import React from "react";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.profileContainer}>
      <div className={css.userInfo}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>Jacques Gluke</p>
        <p className={css.username}>@jgluke</p>
        <p className={css.location}>Ocho Rios, Jamaika</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statItem}>
          <span className={css.statLabel}>Followers</span>
          <span className={css.statValue}>5603</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>Views</span>
          <span className={css.statValue}>4827</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>Likes</span>
          <span className={css.statValue}>1308</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
