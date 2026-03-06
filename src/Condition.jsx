import {useState} from "react";
import Admin from "./Admin";
import User from "./User";

const Condition = () => {
    const [username,  setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("null");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (username === "admin" && password === "admin123") {
            setRole("admin");
            setError("");
        }
        else if(username === "user" && password === "user123") {
            setRole("user");
            setError("");
        }
        else {
            setError("Invalid username or password");
            setRole("null");
        }
    }
    return (
        <div>
            {!role ? (
                <div>
                    <h2>Login</h2>
                    <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}    
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    {error && <p style={{color: "red"}}>{error}</p>}
                </div>
            ) : role === "admin" ? (
                <Admin />
            ) : (
                <User />
            )}
        </div>
    )
}
export default Condition;