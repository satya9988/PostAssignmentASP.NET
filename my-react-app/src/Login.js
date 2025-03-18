import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        fetch("http://localhost:5001/api/Account/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                navigate("/");
            })
            .catch((err) => {
                console.log("Invalid Credentials:", err);
            });
    };

    const txtHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4 text-primary">Login</h3>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={user.username}
                            onChange={txtHandler}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={user.password}
                            onChange={txtHandler}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default Login;
