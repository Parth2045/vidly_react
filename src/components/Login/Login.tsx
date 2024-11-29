import styles from './Login.module.css';
import { ILogin } from './login.model';
import { FormEvent, useState } from 'react';
import { login } from '../../services/Customers.service';

function Login() {
  const initialFields: ILogin = {
    email: "",
    password: ""
  };

  const [formInputs, setFormInputs] = useState(initialFields);
  const [formFieldErrors, setFormFieldErrors] = useState<Partial<ILogin>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(validateForm()) {
        const response = await login(formInputs);
        if(response.error) {
            alert(response.error);
        } else {
            alert("User logged in.");
            setFormInputs(initialFields);
        }    
    }
  }

  const validateForm = () => {
    const errors: Partial<ILogin> = {};
    if(!formInputs.email) errors.email = "Email is required!";
    if(!formInputs.password) errors.password = "Password is required!";

    setFormFieldErrors(errors);
    return Object.keys(errors).length === 0;
}

  return (
    <form onSubmit={handleSubmit}>
        <div className={styles.container}>
            <h1>Login</h1>
            <hr />
            <div className={styles.formGroup}>
              <label htmlFor='email' className={styles.formInputLabel}>Email</label>
              <input
                  type='text'
                  id='email'
                  name='email'
                  className={styles.formInput}
                  onChange={(e) => setFormInputs((prev) => ({
                    ...prev, email: e.target.value
                  }))}
              />
              <p className={styles.formValidationText}>
              {formFieldErrors.email}
              </p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='password' className={styles.formInputLabel}>Password</label>
              <input
                  type='password'
                  id='password'
                  name='password'
                  className={styles.formInput}
                  onChange={(e) => setFormInputs((prev) => ({
                    ...prev, password: e.target.value
                  }))}
              />
              <p className={styles.formValidationText}>
                {formFieldErrors.password}
              </p>
            </div>
            
            <button type='submit' className={styles.loginButton}>
                Login
            </button>
        </div>
    </form>
);
}

export default Login