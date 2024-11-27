import { FormEvent, useState } from 'react'
import styles from './Register.module.css';
import { ICustomer } from './register.model';
import { registerCustomer } from '../../services/Customers.service';

function Register() {
    const initialFields: ICustomer = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const [formInputs, setFormInputs] = useState(initialFields);
    const [formFieldErrors, setFormFieldErrors] = useState<Partial<ICustomer>>({});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if(validateForm()) {
            const response = await registerCustomer(formInputs);
            if(response.error) {
                alert(response.error);
            } else {
                alert("User registered succesfully!, please login.");
                setFormInputs(initialFields);
            }    
        }
    }

    const validateForm = () => {
        const errors: Partial<ICustomer> = {};
        if(!formInputs.firstName) errors.firstName = "First Name is required!";
        if(!formInputs.lastName) errors.lastName = "Last Name is required!";
        if(!formInputs.phone) errors.phone = "Phone is required!";
        if(!formInputs.email) errors.email = "Email is required!";
        if(!formInputs.password) errors.password = "Password is required!";
        if(formInputs.password !== formInputs.confirmPassword) errors.confirmPassword = "Passwords do not match!";

        setFormFieldErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <h1>Register</h1>
                <hr />
                {Object.entries(formInputs).map(([key, value]) => (
                    <div className={styles.formGroup} key={key}>
                        <label htmlFor={key} className={styles.formInputLabel}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            type={key.includes('password') || key.includes('confirmPassword') ? 'password' : 'text'}
                            id={key}
                            name={key}
                            value={value}
                            className={styles.formInput}
                            onChange={(e) => 
                                setFormInputs((prev) => ({
                                    ...prev,
                                    [key]: e.target.value
                                }))
                            }
                        />
                        <p className={styles.formValidationText}>
                            {formFieldErrors[key as keyof ICustomer]}
                        </p>
                    </div>
                ))}
                <button type='submit' className={styles.registerButton}>
                    Register
                </button>
            </div>
        </form>
    );
}

export default Register;