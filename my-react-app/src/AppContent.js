import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FileInput from "./JsonInputFile";
import ViewData from "./ViewData";
import DepartmentDetails from "./DepartmentDetails";
import ClassDetails from "./ClassDetails";
import StudentDetails from "./StudentDetails";
import Header from "./Header";
import Login from "./Login";
import ProtestedRouter from "./ProtestedRouter";
import './appcontent.css';

const Home = () => {
    return (
        <div className="hero-section text-center">
            <h1 className="display-4">Welcome to College Management</h1>
            <p className="lead">A modern solution to manage colleges, departments, and students effortlessly.</p>
            <a href="/view-college" className="btn btn-primary btn-lg">
                Get Started
            </a>
        </div>
    );
};

const Content = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/Home/GetAllCollege")
            .then((response) => response.json())
            .then((data) => setColleges(data))
            .catch((error) => console.error("Error fetching colleges:", error));
    }, []);

    return (
        <BrowserRouter>
            <div className="main-container">
               
                <Header />

                
                <div className="content-area container mt-5">

                    <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtestedRouter />}>
                        <Route path="/" exact={true} element={<Home />} />
                        <Route path="/add-Jsonfile" element={<FileInput />} />
                        <Route path="/view-college" element={<ViewData colleges={colleges} />} />
                        <Route path="/departments/:collegename" element={<DepartmentDetails />} />
                        <Route
                            path="/departments/:collegename/:departmentname"
                            element={<ClassDetails />}
                        />
                        <Route
                            path="/student/:collegename/:departmentname/:classname"
                            element={<StudentDetails />}
                        />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Content;
