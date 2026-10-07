import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/signupForm.module.css";

interface SignupData {
  name: string;
  surname: string;
  email: string;
  cellNumber: string;
  password: string;
  confirmPassword: string;
}

const emptyForm: SignupData = {
  name: "",
  surname: "",
  email: "",
  cellNumber: "",
  password: "",
  confirmPassword: "",
};

function SignupForm() {
  const [formData, setFormData] = useState<SignupData>(emptyForm);
  const [errors, setErrors] = useState<Partial<SignupData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): Partial<SignupData> => {
    const newErrors: Partial<SignupData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.surname.trim()) newErrors.surname = "Surname is required";

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^\d{10}$/.test(formData.cellNumber)) {
      newErrors.cellNumber = "Cell number must be 10 digits";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: send to the API once registration is built
      console.log("Form is valid", formData);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.heading}>Create your account</h2>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="surname">Surname</label>
          <input id="surname" name="surname" value={formData.surname} onChange={handleChange} />
          {errors.surname && <span className={styles.error}>{errors.surname}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="cellNumber">Cell number</label>
        <input id="cellNumber" name="cellNumber" type="tel" value={formData.cellNumber} onChange={handleChange} />
        {errors.cellNumber && <span className={styles.error}>{errors.cellNumber}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
      </div>

      <button type="submit" className={styles.button}>
        Sign up
      </button>

      <p className={styles.switch}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
}

export default SignupForm;