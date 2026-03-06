import axios from 'axios';
import { useEffect, useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        password: ""
    });

    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://backend-azure-mu-86.vercel.app/user',
                formData
            );
            console.log("form data:", formData);
            
            setFormData({
                name: "",
                age: "",
                email: "",
                password: ""
            });
            console.log(response.data);

            fetchUsers();

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                'https://backend-azure-mu-86.vercel.app/user'
            );
            setUsers(response.data.users || []);
            console.log("Fetched users:", response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <p>All Users</p>

            {users.length === 0 ? (
                <p>No users available</p>
            ) : (
                users.map((user, index) => (
                    <div key={index}>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;