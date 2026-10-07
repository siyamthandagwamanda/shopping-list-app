import LoginForm from "../components/LoginForm";
import styles from "../styles/auth.module.css";

function LogIn() {
  return (
    <section className={styles.page}>
      <LoginForm />
    </section>
  );
}

export default LogIn;