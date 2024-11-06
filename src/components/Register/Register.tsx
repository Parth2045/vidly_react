import { FormEvent, useRef, useState } from 'react'
import styles from './Register.module.css';
import { ICustomer } from './register.model';

function Register() {
    const formFields: ICustomer = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const [formFieldErrors, setFormFieldErrors] = useState(formFields);
    const formInputs = useRef(formFields);
    const isSubmitted = useRef(false);
        
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(validateForm()) {
            isSubmitted.current = true;
            console.log("isSubmitted: ", isSubmitted.current);
        } else {
            console.log("formInputs:", formInputs.current);
        }
    }

    const validateForm = () => {
        let isValid: boolean = true;

        const formInputErrors = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

        if(!formInputs.current.firstName) {
            formInputErrors.firstName = "First Name is required!";
            isValid = false;
        }

        if(!formInputs.current.lastName) {
            formInputErrors.lastName = "Last Name is required!";
            isValid = false;
        }

        if(!formInputs.current.email) {
            formInputErrors.email = "Email is required!";
            isValid = false;
        }

        if(!formInputs.current.password) {
            formInputErrors.password = "Password is required!";
            isValid = false;
        }

        if(!formInputs.current.confirmPassword) {
            formInputErrors.confirmPassword = "Confirm Password is required!";
            isValid = false;
        }

        if(formInputs.current.confirmPassword !== formInputs.current.password) {
            formInputErrors.confirmPassword = "Password & Confirm Password is not same!";
            isValid = false;
        }

        setFormFieldErrors(formInputErrors);

        return isValid;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <h1>Register</h1>
                <hr />

                <div className={styles.formGroup}>
                    <label className={styles.formInputLabel} htmlFor='firstName'>First Name</label>
                    <input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    id='firstName'
                    className={styles.formInput}
                    onChange={(e) =>
                        formInputs.current.firstName = e.target.value
                    }
                    />
                    <p className={styles.formValidationText}>
                    {formFieldErrors.firstName ?? formFieldErrors.firstName}
                    </p>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formInputLabel} htmlFor='lastName'>Last Name</label>
                    <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    id='lastName'
                    className={styles.formInput}
                    onChange={(e) => 
                        formInputs.current.lastName = e.target.value 
                    } />
                    <p className={styles.formValidationText}>{formFieldErrors.lastName ?? formFieldErrors.lastName}</p>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formInputLabel} htmlFor='email'>Email</label>
                    <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    id='email'
                    className={styles.formInput}
                    onChange={(e) => 
                        formInputs.current.email = e.target.value
                    } />
                    <p className={styles.formValidationText}>{formFieldErrors.email ?? formFieldErrors.email}</p>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formInputLabel} htmlFor='password'>Password</label>
                    <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    id='password'
                    className={styles.formInput}
                    autoComplete="off"
                    onChange={(e) => 
                        formInputs.current.password = e.target.value
                    }
                    />
                    <p className={styles.formValidationText}>{formFieldErrors.password ?? formFieldErrors.password}</p>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formInputLabel} htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    id='confirmPassword'
                    className={styles.formInput}
                    autoComplete="off"
                    onChange={(e) => 
                        formInputs.current.confirmPassword = e.target.value
                    }
                    />
                    <p className={styles.formValidationText}>{formFieldErrors.confirmPassword ?? formFieldErrors.confirmPassword}</p>
                </div>

                <button type='submit' className={styles.registerButton}>Register</button>
            </div>
        </form>
    )
}

export default Register