import styles from "../Notification/Notification.module.css";

const Notification = ({ message }) => {
  return <p className={styles.Notification}>{message}</p>;
};

export default Notification;
