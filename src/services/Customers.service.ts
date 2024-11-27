import { API_URL } from "../configs/config";
import { ICustomer } from '../components/Register/register.model'

const registerCustomer = async (customer: ICustomer) => {
    const customerData = {
        "firstName": customer.firstName,
        "lastName": customer.lastName,
        "phone": customer.phone,
        "email": customer.email,
        "password": customer.password
    };
    return await fetch(`${API_URL}/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(customerData)
    }).then((response) => response.json());
};

export { registerCustomer };
