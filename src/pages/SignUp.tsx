import SignupForm from "../components/SignupForm";
import styles from "../styles/auth.module.css";

function SignUp() {
  return (
    <section className={styles.page}>
      <SignupForm />
    </section>
  );
}

export default SignUp;