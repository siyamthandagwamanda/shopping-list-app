import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/loginForm.module.css";

interface LoginData {
  email: string;
  password: string;
}

const emptyForm: LoginData = {
  email: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState<LoginData>(emptyForm);
  const [errors, setErrors] = useState<Partial<LoginData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): Partial<LoginData> => {
    const newErrors: Partial<LoginData> = {};

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
     
      console.log("Form is valid", formData.email);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.heading}>Welcome back</h2>

      <div className={styles.field}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
      </div>

      <button type="submit" className={styles.button}>
        Log in
      </button>

      <p className={styles.switch}>
        New to ShopSort? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
}

export default LoginForm;